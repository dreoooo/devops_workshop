import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "src/schema/schema.prisma",
  migrations: {
    path: "src/schema/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});