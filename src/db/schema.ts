import { relations } from "drizzle-orm";
import {
  index,
  integer,
  pgTable,
  serial,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const bandProfileTable = pgTable("bandProfiles", {
  id: integer().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).primaryKey(),
  bandName: varchar({ length: 255 }).notNull(),
  bio: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  location: varchar({ length: 255 }).notNull(),
  genres: varchar({ length: 255 }).array(),
  profileImageUrl: varchar({ length: 255 }).default(
    process.env.DEFAULT_PROFILE_IMAGE_URL!,
  ),
},
  (table) => [
    index('band_name_search_index').using('gin', sql`to_tsvector('english', ${table.bandName})`),
  ]
);

export const musicianProfileTable = pgTable("musicianProfiles", {
  id: integer().generatedAlwaysAsIdentity(),
  userId: varchar({ length: 255 }).primaryKey(),
  musicianName: varchar({ length: 255 }).notNull(),
  bio: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  location: varchar({ length: 255 }).notNull(),
  genres: varchar({ length: 255 }).array(),
  profileImageUrl: varchar({ length: 255 }).default(
    process.env.DEFAULT_PROFILE_IMAGE_URL!,
  ),
});

export const bandProfileRelations = relations(bandProfileTable, ({ many }) => ({
  "profiles-connections_1": many(connections, {
    relationName: "profiles-connections_1",
  }),
  "profiles-connections_2": many(connections, {
    relationName: "profiles-connections_2",
  }),
}));

export const connections = pgTable("connections", {
  id: serial("id").primaryKey(),
  firstProfile: varchar("first_profile_id").notNull(),
  secondProfile: varchar("second_profile_id").notNull(),
  isAccepted: boolean().notNull().default(false),
});

export const connectionsRelations = relations(connections, ({ one }) => ({
  firstProfile: one(bandProfileTable, {
    fields: [connections.firstProfile],
    references: [bandProfileTable.userId],
    relationName: "profiles-connections_1",
  }),
  secondProfile: one(bandProfileTable, {
    fields: [connections.secondProfile],
    references: [bandProfileTable.userId],
    relationName: "profiles-connections_2",
  }),
}));

export const genresTable = pgTable("genres", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull().unique(),
});

export const countriesTable = pgTable("countries", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull().unique(),
});
