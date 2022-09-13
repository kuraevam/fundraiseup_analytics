import { Entity, Column, ObjectID, ObjectIdColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'tracks' })
export class TrackEntity extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  event!: string;

  @Column()
  tags!: string[];

  @Column()
  url!: string;

  @Column()
  title!: string;

  @Column()
  ts!: string;
}
