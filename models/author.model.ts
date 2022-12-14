import { Optional, UUIDV4 } from "sequelize";
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
  IsUUID,
  Default,
  BelongsToMany,
} from "sequelize-typescript";
import Book from "./book.model";
import Rental from "./rental.model";

export interface AuthorInterface {
  id: string;
  firstName: string;
  lastName: string;
}

export interface AuthorCreationAttributes
  extends Optional<AuthorInterface, "id"> {}

@Table({
  tableName: "author",
  timestamps: true,
})
export default class Author extends Model<
  AuthorInterface,
  AuthorCreationAttributes
> {
  @PrimaryKey
  @IsUUID(4)
  @Default(UUIDV4)
  @NotEmpty
  @Column
  id: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  firstName: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  lastName: string;

  @HasMany(() => Book)
  book: Book[];
}
