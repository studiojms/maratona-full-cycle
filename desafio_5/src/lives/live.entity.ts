import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Live {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  date: string;
}
