import { Phone } from "src/phone/entity/phone.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";

@Entity()
export class Report {

	@PrimaryGeneratedColumn()
	id: number;

	
	@ManyToOne(() => Phone, (phone) => phone.report)
	phone: Phone;
	

	@Column({
		nullable: false,
	})
	date: Date;
	// @Column({
	// 	nullable: true,
	// })
	// who: Phone;

	// @Column({
	// 	nullable: true,
	// })
	// when: string;

	// @Column({
	// 	nullable: true,
	// })
	// where: string;

	// @Column({
	// 	nullable: true,
	// })
	// how: string

	// @Column({
	// 	nullable: true,
	// })
	// what: string

	// @Column({
	// 	nullable: true,
	// })
	// howMuch: number

	// @Column({
	// 	nullable: true,
	// })
	// account: number

	// @Column({
	// 	nullable: true,
	// })
	// date: Date

	// @Column({
	// 	nullable: true,
	// })
	// reporter: number;

	// @Column({
	// })
	// @Column({
	// 	type: 'bytea',
	// 	default: [],
	// })
	// photo: Buffer[];
}