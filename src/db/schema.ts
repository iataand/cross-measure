import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const bandProfileTable = pgTable("bandProfiles", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  bandName: varchar({ length: 255 }).notNull(),
  bio: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  location: varchar({ length: 255 }).notNull(),
  genres: varchar({ length: 255 }).array(),
});

export const genresTable = pgTable("genres", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull().unique(),
});

export const countriesTable = pgTable("countries", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull().unique(),
});
