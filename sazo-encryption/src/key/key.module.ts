import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Key } from './key.entity';
import { KeyService } from './key.service';
import { KeyController } from './key.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Key])],
  providers: [KeyService],
  controllers: [KeyController],
})
export class KeyModule {}
