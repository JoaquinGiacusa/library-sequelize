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
  IsEmail,
  Unique,
} from "sequelize-typescript";
import { Optional, UUIDV4 } from "sequelize";
import Author from "./author.model";
import Rental from "./rental.model";

export interface UserInterface {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserCreationAttributes extends Optional<UserInterface, "id"> {}

@Table({
  tableName: "user",
  timestamps: true,
})
export default class User extends Model<UserInterface, UserCreationAttributes> {
  @PrimaryKey
  @IsUUID(4)
  @Default(UUIDV4)
  @Column
  id: string;

  @AllowNull(false)
  @NotEmpty
  @IsEmail
  @Unique
  @Column
  email: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  password: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  firstName: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  lastName: string;

  @HasMany(() => Rental)
  rentals: Rental[];
}
