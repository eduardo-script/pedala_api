import { Module } from '@nestjs/common';
import { BicicletaController } from './bicicleta.controller';
import { BicicletaService } from './bicicleta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BicicletaModel } from './bicicleta.model';
import { EstacoesModule } from 'src/estacoes/estacoes.module';
import { ModeloModule } from 'src/modelo/modelo.module';

@Module({
  imports:[TypeOrmModule.forFeature([BicicletaModel]), 
    EstacoesModule, 
    ModeloModule
  ],
  controllers: [BicicletaController],
  providers: [BicicletaService]
})
export class BicicletaModule {}
