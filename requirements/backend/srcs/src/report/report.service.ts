import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhoneService } from 'src/phone/phone.service';
import { Report } from './entity/report.entiry';
import { Repository } from 'typeorm';

@Injectable()
export class ReportService {
	constructor(

		@InjectRepository(Report)
		private reportRepository: Repository<Report>,

		private phoneService: PhoneService
	) {}

	async report(number: string) {
		const newReport = this.reportRepository.create({
			date: new Date(Date.now()),
			phone: await this.phoneService.getOne(number),
		})
		await this.phoneService.update(newReport);
		await this.reportRepository.insert(newReport);
	}
}
