BEGIN;

DROP TABLE IF EXISTS "sewaddict",
"fabric", 
"sewing_thread", 
"sewing_pattern";

-- User table
CREATE TABLE IF NOT EXISTS "sewaddict" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NUll
);

-- Fabric table
CREATE TABLE IF NOT EXISTS "fabric"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "picture" TEXT DEFAULT './public/fabrics.jpeg',
    "width" INT NOT NULL DEFAULT 140,
    "length" INT NOT NULL,
    "type" TEXT,
    "notice" TEXT,
    "color" TEXT,
    "sewaddict_id" INT REFERENCES "sewaddict"("id")
);

-- Sewing thread table
CREATE TABLE IF NOT EXISTS "sewing_thread"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "picture" TEXT DEFAULT './public/threads.jpeg',
    "brand" TEXT,
    "color" TEXT,
    "type" TEXT DEFAULT 'bobine',
    "reference" TEXT,
    "stock" INT,
    "sewaddict_id" INT REFERENCES "sewaddict"("id")
);

-- Sewing pattern table
CREATE TABLE IF NOT EXISTS "sewing_pattern"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "picture" TEXT DEFAULT './public/patterns.jpeg',
    "brand" TEXT,
    "name" TEXT,
    "type" TEXT NOT NULL,
    "target" TEXT,
    "sewaddict_id" INT REFERENCES "sewaddict"("id")
);

COMMIT;