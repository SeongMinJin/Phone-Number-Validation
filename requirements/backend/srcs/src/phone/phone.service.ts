import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Phone } from './entity/phone.entity';
import { Search } from 'src/search/entity/search.entity';
import { Report } from 'src/report/entity/report.entiry';

@Injectable()
export class PhoneService {
	constructor(

		@InjectRepository(Phone)
		private phoneRepository: Repository<Phone>

) {}


	async update(req: Search | Report) {
			req instanceof Search ? ++req.phone.search_count : ++req.phone.report_count;
			await this.phoneRepository.save(req.phone);
	}


	async findOne(number: string) {
		const phone = await this.phoneRepository.findOne({
			where: {
				number: number,
			},
			relations: {
				search: true,
				report: true,
			}
		})
		return phone;
	}

	async createOne(number: string) {
		const phone = await this.findOne(number);
		if (phone === null) {
			const newPhone = this.phoneRepository.create({
				number: number,
				report_count: 0,
				search_count: 0,
			});
			await this.phoneRepository.insert(newPhone);
			return newPhone;
		}
		return phone;
	}


	async getOne(number: string) {
		const phone = await this.findOne(number);
		if (phone === null) return await this.createOne(number);
		return phone;
	}

}
