import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { PhoneModule } from 'src/phone/phone.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './entity/report.entiry';

@Module({
	imports: [
		PhoneModule,
		TypeOrmModule.forFeature([Report])
	],
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
