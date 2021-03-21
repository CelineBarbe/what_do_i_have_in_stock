BEGIN;

DROP TABLE IF EXISTS "fabric", 
"sewing_thread", 
"sewing_pattern",
"user";

-- Fabric table
CREATE TABLE IF NOT EXISTS "fabric"(
    "id" serial PRIMARY KEY,
    "picture" TEXT,
    "width" INT NOT NULL DEFAULT 140,
    "length" INT NOT NULL,
    "type" TEXT,
    "notice" TEXT,
    "color" TEXT
);

-- Sewing thread table
CREATE TABLE IF NOT EXISTS "sewing_thread"(
    "id" serial PRIMARY KEY,
    "picture" TEXT,
    "brand" TEXT,
    "color" TEXT,
    "type" TEXT,
    "reference" TEXT,
    "stock" INT
);

-- Sewing pattern table
CREATE TABLE IF NOT EXISTS "sewing_pattern"(
    "id" serial PRIMARY KEY,
    "picture" TEXT,
    "brand" TEXT,
    "type" TEXT NOT NULL,
    "target" TEXT
);

-- User table
CREATE TABLE IF NOT EXISTS "user" (
    "id" serial PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NUll
    "fabric_id" integer NOT NULL REFERENCES "fabric" ("id"),
    "sewing_thread_id" integer NOT NULL REFERENCES "sewing_thread" ("id"),
    "sewing_pattern_id" integer NOT NULL REFERENCES "sewing_pattern" ("id"),
);

COMMIT;