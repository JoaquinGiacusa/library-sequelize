import {
  Model,
  Table,
  AutoIncrement,
  PrimaryKey,
  Column,
  AllowNull,
  NotEmpty,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Autor from "./autor.model";

export interface BookInterface {
  id?: number;
  title: string;
  autorId: number;
  autor: Autor;
}

@Table({
  tableName: "book",
  timestamps: true,
})
export default class Book extends Model implements BookInterface {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  title: string;

  @ForeignKey(() => Autor)
  @Column
  autorId: number;

  @BelongsTo(() => Autor)
  autor: Autor;
}
