import { Search } from "src/search/entity/search.entity";
import { Report } from "src/report/entity/report.entiry";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Phone {
	@PrimaryGeneratedColumn()
	id: number;


	@Column({
		nullable: false,
		unique: true,
	})
	number: string;

	@Column({
		default: 0,
	})
	report_count: number;

	@Column({
		default: 0,
	})
	search_count: number;

	@OneToMany(() => Search, (Search) => Search.phone)
	search: Search[];

	@OneToMany(() => Report, (Report) => Report.phone)
	report: Report[];
	

}