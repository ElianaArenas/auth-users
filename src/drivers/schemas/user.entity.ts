import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Client } from '.';

@Entity()
export class User {

	@PrimaryGeneratedColumn()
  id: number;
	
	@Index({ unique: true })
  @Column('varchar', { unique: true })
	username: string;

	@Column({
		type: 'text'
	})
	password: string;

	@Column({
		nullable: false,
		type: 'varchar',
		enum: ['admin', 'client'],
		default: 'client'
	})
	role: string;

	@OneToOne(() => Client,
		{
			cascade: true,
		})
	@JoinColumn()
	dni: number;
}
