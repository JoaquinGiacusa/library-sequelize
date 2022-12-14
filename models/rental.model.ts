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
} from "sequelize-typescript";
import { Optional, UUIDV4 } from "sequelize";
import Author from "./author.model";
import Book from "./book.model";
import User from "./user.model";

export interface RentalInterface {
  id: string;
  rentalEndDate: Date;
  bookId: string;
  userId: string;
}

export interface RentalCreationAttributes
  extends Optional<RentalInterface, "id"> {}

@Table({
  tableName: "rental",
  timestamps: true,
})
export default class Rental extends Model<
  RentalInterface,
  RentalCreationAttributes
> {
  @PrimaryKey
  @IsUUID(4)
  @Default(UUIDV4)
  @Column
  id: string;

  @AllowNull(false)
  @Column
  rentalEndDate: Date;

  @ForeignKey(() => Book)
  @AllowNull(false)
  @Column
  bookId: string;

  @BelongsTo(() => Book)
  book: Book;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
