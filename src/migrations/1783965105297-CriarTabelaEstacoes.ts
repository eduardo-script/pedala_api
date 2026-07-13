import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaEstacoes1783965105297 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS estacoes(
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                nome VARCHAR(150) NOT NULL,
                capacidade INTEGER NOT NULL DEFAULT 0,
                ativo BOOLEAN NOT NULL DEFAULT false
            );   
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("estacoes")
    }

}
