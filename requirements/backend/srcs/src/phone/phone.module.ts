import { Module } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './entity/phone.entity';

@Module({
	imports: [
		TypeOrmModule.forFeature([Phone])
	],
  providers: [PhoneService],
	exports: [PhoneService],
})
export class PhoneModule {}
