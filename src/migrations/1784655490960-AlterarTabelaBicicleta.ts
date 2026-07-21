import { table } from "console";
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterarTabelaBicicleta1784655490960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE bicicletas ADD COLUMN 
                situacao VARCHAR(50) DEFAULT 'DISPONIVEL';    
        `)

        // await queryRunner.addColumn(
        //     "bicicletas",
        //     new TableColumn({
        //         name: "situcao",
        //         type: "varchar",
        //         length: "50",
        //         isNullable: false
        //     })
        // )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner
           .dropColumn("bicicletas", "situacao", true)
    }

}
