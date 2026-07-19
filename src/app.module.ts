import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { EstacoesModule } from './estacoes/estacoes.module';
import { MarcaModule } from './marca/marca.module';
import { ModeloModule } from './modelo/modelo.module';
import { BicicletaModule } from './bicicleta/bicicleta.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env' 
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "102030",
      database: "pedaladbt",
      autoLoadEntities: true,
      migrations: [
        join(__dirname,'migrations', '*{.ts,.js}'),
      ],
      migrationsRun: true
    }),
    UsuarioModule,
    EstacoesModule,
    MarcaModule,
    ModeloModule,
    BicicletaModule
  ],
  providers: [AppService],
})
export class AppModule {}
