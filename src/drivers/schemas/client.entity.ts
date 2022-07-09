import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class Client {

  @PrimaryColumn({
    unique: true,
  })
  dni: number;

  @Column({
    type: 'varchar'
  })
  client_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: number;

  @Column()
  date_joined_company: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  address: string;
}