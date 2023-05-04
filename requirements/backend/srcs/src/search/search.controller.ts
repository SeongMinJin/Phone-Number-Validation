import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
	constructor(
		private searchService: SearchService,
	) {}


	@Get(':number')
	async search(@Param('number') number) {
		console.log('here?!');
		return await this.searchService.search(number);
	}
}
