import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { PhoneModule } from 'src/phone/phone.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Search } from './entity/search.entity';

@Module({
	imports: [
		PhoneModule,
		TypeOrmModule.forFeature([Search])
	],
  controllers: [SearchController],
  providers: [SearchService]
})
export class SearchModule {}
