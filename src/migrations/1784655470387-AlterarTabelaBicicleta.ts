import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaBicicleta1784315931961 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS bicicletas(
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                modelo_id UUID NOT NULL,
                estacao_id UUID NOT NULL,
                dt_cadastro DATE NOT NULL DEFAULT 'now()',
                dt_atualizado TIMESTAMP,
                CONSTRAINT fk_modelo_bicicleta FOREIGN KEY (modelo_id)
                    REFERENCES modelos(id) ON UPDATE NO ACTION 
                    ON DELETE CASCADE,
                CONSTRAINT fk_estacao_bicicleta FOREIGN KEY (estacao_id)
                    REFERENCES estacoes(id) ON UPDATE NO ACTION 
                    ON DELETE CASCADE
            );   
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}