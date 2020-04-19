import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { CONNREFUSED } from "dns";

@Entity()
export class Address {
	@PrimaryGeneratedColumn()
	ID:Number

	@Column()
	Company:Number

	@Column()
	Name:string

	@Column()
	Address1:string

	@Column()
	Address2:String

	@Column()
	Address3:string

	@Column()
	City:String

	@Column()
	State:String

	@Column()
	Country:String

	@Column()
	Zipcode:String
}