import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1701021017258 } from 'src/migrations/1701021017258-CreateCoursesTable';
import { CreateTagsTable1701022883874 } from 'src/migrations/1701022883874-CreateTagsTable';
import { CreateCoursesTagsTable1701047944478 } from 'src/migrations/1701047944478-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1701078892955 } from 'src/migrations/1701078892955-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1701079491690 } from 'src/migrations/1701079491690-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [Course, Tag],
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1701021017258,
    CreateTagsTable1701022883874,
    CreateCoursesTagsTable1701047944478,
    AddCoursesIdToCoursesTagsTable1701078892955,
    AddTagsIdToCoursesTagsTable1701079491690,
  ],
});
