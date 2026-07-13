import { Module } from '@nestjs/common';
import { EstacoesService } from './estacoes.service';
import { EstacoesController } from './estacoes.controller';

@Module({
  providers: [EstacoesService],
  controllers: [EstacoesController]
})
export class EstacoesModule {}
