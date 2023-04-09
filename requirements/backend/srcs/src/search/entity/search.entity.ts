import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Phone } from "src/phone/entity/phone.entity";



@Entity()
export class Search {

	@PrimaryGeneratedColumn()
	id: number;


	@ManyToOne(() => Phone, (phone) => phone.search)
	phone: Phone


	@Column({
		nullable: false,
	})
	date: Date
	
}