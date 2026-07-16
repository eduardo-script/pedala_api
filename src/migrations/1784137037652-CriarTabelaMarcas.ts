import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaMarcas1784137037652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.query(`
                CREATE TABLE IF NOT EXISTS marcas(
                    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                    nome VARCHAR(150) NOT NULL UNIQUE,
                    url VARCHAR(150) NOT NULL
                );   
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("marcas")
    }

}
