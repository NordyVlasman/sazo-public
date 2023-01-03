import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  createHash,
  generateKeyPairSync,
  privateDecrypt,
  publicEncrypt,
} from 'crypto';
import { Repository } from 'typeorm';
import { CreateKeyRequestDto } from './dto/crerate-key-request.dto';
import { DecryptDto } from './dto/decrypt.dto';
import { EncryptDto } from './dto/encrypt.dto';
import { Key } from './key.entity';
import { IKey } from './key.interface';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { encrypt, decrypt } = require('../utils/crypt');

@Injectable()
export class KeyService {
  private keys: Key[] = [];
  constructor(
    @InjectRepository(Key)
    private readonly keyRepository: Repository<Key>,
  ) {}

  async create(createKeyDto: CreateKeyRequestDto) {
    const hash = createHash('sha256');
    hash.update(createKeyDto.cid);

    const id = hash.digest('hex');

    const k = await this.keyRepository.findOne({ where: { cid: id } });

    if (k) {
      return '';
    }

    const { publicKey, privateKey } = await generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      },
    });

    const keyToStore = encrypt(privateKey);

    const store = Buffer.from(JSON.stringify(keyToStore)).toString('base64');

    const newKey: IKey = {
      cid: id,
      pkey: store,
    };

    const key = this.keyRepository.create(newKey);
    this.keyRepository.save(key);

    return Buffer.from(publicKey).toString('base64');
  }

  async decryptMessage(decryptDto: DecryptDto) {
    const hash = createHash('sha256');
    hash.update(decryptDto.cid);

    const id = hash.digest('hex');

    const key = await this.keyRepository.findOne({ where: { cid: id } });

    if (!key) {
      return 'Not found';
    }

    const buff = Buffer.from(key.pkey, 'base64').toString('ascii');

    const resp = [];
    decryptDto.message.forEach((item) => {
      const message = privateDecrypt(
        decrypt(JSON.parse(buff)),
        Buffer.from(item.content, 'hex'),
      );
      item.content = message.toString('utf-8');

      resp.push(item);
    });

    return resp;
  }

  async encrypt(datas: EncryptDto) {
    const buff = Buffer.from(datas.pkey, 'base64').toString('ascii');
    const data = publicEncrypt(buff, Buffer.from(datas.message, 'utf8'));
    return data.toString('hex');
  }
}
