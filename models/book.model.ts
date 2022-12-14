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
  IsUUID,
  Default,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import { Optional, UUIDV4 } from "sequelize";
import Author from "./author.model";
import Rental from "./rental.model";

export interface BookInterface {
  id: string;
  title: string;
  authorId?: string;
  author?: Author;
}

export interface BookCreationAttributes extends Optional<BookInterface, "id"> {}

@Table({
  tableName: "book",
  timestamps: true,
})
export default class Book extends Model<BookInterface, BookCreationAttributes> {
  @PrimaryKey
  @IsUUID(4)
  @Default(UUIDV4)
  @Column
  id: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  title: string;

  @ForeignKey(() => Author)
  @AllowNull(false)
  @Column
  authorId: string;

  @BelongsTo(() => Author)
  author: Author;

  @HasMany(() => Rental)
  rentals: Rental[];
}
