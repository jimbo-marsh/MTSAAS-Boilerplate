import {Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	ID:Number

	@Column()
	email:string

	@Column()
	password:string

	@Column()
	CompanyID:Number

	@Column()
	firstname:string

	@Column()
	lastname:string
	
}	