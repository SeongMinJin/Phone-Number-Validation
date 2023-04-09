import { Controller, Get, Param } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
	constructor(
		private reportService:ReportService,
	) {}

	@Get(':number')
	async report(@Param('number') number) {
		await this.reportService.report(number);
	}
}
