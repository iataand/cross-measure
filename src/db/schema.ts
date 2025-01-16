import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  bandName: varchar({ length: 255 }).notNull(),
  bio: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  location: varchar({ length: 255 }).notNull(),
});
