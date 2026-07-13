import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaUsuario1783535151377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS usuarios(
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                nome VARCHAR(150) NOT NULL,
                email VARCHAR(150) UNIQUE NOT NULL,
                telefone VARCHAR(20) NOT NULL,
                dt_criacao TIMESTAMP DEFAULT 'now()'
            );   
        `)
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }
}
