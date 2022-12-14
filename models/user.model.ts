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

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
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
  @Column
  firstName: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  lastName: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  age: number;

  @HasMany(() => Rental)
  rentals: Rental[];
}
