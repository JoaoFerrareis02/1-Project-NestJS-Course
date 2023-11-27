import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCoursesTagsTable1701047944478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'courses_tags_tags',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: `lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-a' || substr(lower(hex(randomblob(2))),2) || '-8' || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))`,
          },
          {
            name: 'created_at',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('courses_tags_tags');
  }
}
