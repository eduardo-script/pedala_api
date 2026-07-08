import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUuidExtension1783452053358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS "pgcrypto";     
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP EXTENSION IF EXISTS "pgcrypto";
        `)
    }

}
