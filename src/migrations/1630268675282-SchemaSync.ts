import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1630268675282 implements MigrationInterface {
  name = 'SchemaSync1630268675282';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."coffee" ADD "description" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "public"."coffee" DROP COLUMN "description"`,
    );
  }
}
