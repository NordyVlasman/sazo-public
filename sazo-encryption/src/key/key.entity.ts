import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Key {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  cid: string;

  @Column('text')
  pkey: string;
}
