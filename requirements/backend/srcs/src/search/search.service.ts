import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhoneService } from 'src/phone/phone.service';
import { Search } from './entity/search.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SearchService {

	constructor(
		private readonly phoneService: PhoneService,

		@InjectRepository(Search)
		private searchRepository: Repository<Search>,
	) {}


	async search(number: string) {
		const result = await fetch(`https://api.apilayer.com/number_verification/validate?number=+82${number.substring(1)}`, {
			method: "GET",
			headers: {
				apikey: "RisW7Sm33iFiecT3381KLBrUCyhr5cpx",
			}
		})
		.then(response => response.json())
		.then(result => {
			return result;
		})

		const newSearch = this.searchRepository.create({
			date: new Date(Date.now()),
			phone: await this.phoneService.getOne(number),
		})

		await this.phoneService.update(newSearch);
		await this.searchRepository.insert(newSearch);
		const phone = await this.phoneService.findOne(number);
		return ({
			result: result,
			searchCount: phone.search_count,
			search: phone.search,
			reportCount: phone.report_count,
			report: phone.report,
		})
	}
}