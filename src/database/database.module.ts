import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        return {
          type: 'sqlite',
          database: configService.get('DB_NAME'),
          synchronize: false,
          entities: [Course, Tag],
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
