import {
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import Book from "./book.model";

export interface AutorInterface {
  id?: number;
  name: string;
}

@Table({
  tableName: "autor",
  timestamps: true,
})
export default class Autor extends Model implements AutorInterface {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  name: string;

  @HasMany(() => Book)
  books: Book[];
}
