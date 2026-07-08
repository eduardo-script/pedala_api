import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

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
      migrations: [
        join(__dirname,'migrations', '*{.ts,.js}'),
      ],
      migrationsRun: true
    }),
    UsuarioModule
  ],
  providers: [AppService],
})
export class AppModule {}
