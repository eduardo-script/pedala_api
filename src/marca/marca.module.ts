import { Module } from '@nestjs/common';
import { MarcaController } from './marca.controller';
import { MarcaService } from './marca.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaModel } from './marca.model';

@Module({
  imports: [TypeOrmModule.forFeature([MarcaModel])],
  controllers: [MarcaController],
  providers: [MarcaService]
})
export class MarcaModule {}
