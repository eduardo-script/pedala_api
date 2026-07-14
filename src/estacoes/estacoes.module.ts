import { Module } from '@nestjs/common';
import { EstacoesService } from './estacoes.service';
import { EstacoesController } from './estacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstacaoModel } from './estacao.model';

@Module({
  imports: [TypeOrmModule.forFeature([EstacaoModel])],
  providers: [EstacoesService],
  controllers: [EstacoesController]
})
export class EstacoesModule {}
