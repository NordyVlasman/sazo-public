import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateKeyDto } from './dto/crerate-key.dto';
import { DecryptDto } from './dto/decrypt.dto';
import { EncryptDto } from './dto/encrypt.dto';
import { KeyService } from './key.service';
import { Response } from 'express';

@Controller('key')
export class KeyController {
  constructor(private keyService: KeyService) {}

  @Post()
  async create(@Body() createKeyDto: CreateKeyDto) {
    return await this.keyService.create(createKeyDto);
  }

  @Post('/decrypt')
  async decrypt(@Res() res: Response, @Body() decryptDto: DecryptDto) {
    const data = await this.keyService.decryptMessage(decryptDto);

    res.status(HttpStatus.OK).json(data);
  }

  @Post('/encrypt')
  async encrypt(@Body() encryptDto: EncryptDto) {
    return await this.keyService.encrypt(encryptDto);
  }
}
