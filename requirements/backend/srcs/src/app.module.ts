import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { SearchModule } from './search/search.module';
import { PhoneModule } from './phone/phone.module';
import { ReportModule } from './report/report.module';


@Module({
  imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'alsdl12',
      database: 'ru38fihsjbdjahkbfwefn2qedf',
      entities: [
				__dirname + '/../dist/**/*.entity{.ts,.js}'
			],
      synchronize: true,
			autoLoadEntities: true,
		}),
		SearchModule,
		PhoneModule,
		ReportModule
	],
  controllers: [],
  providers: [],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}

