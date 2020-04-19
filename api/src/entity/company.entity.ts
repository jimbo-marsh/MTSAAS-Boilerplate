import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Company {
	@PrimaryGeneratedColumn()
	ID:Number;

	@Column()
	Name:string;
}