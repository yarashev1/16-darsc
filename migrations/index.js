import pool from "../configs/database.config.js"

export const TABLE_SCHEMAS = `
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY ,
    name VARCHAR(128) NOT NULL,
    phone VARCHAR(9) NOT NULL,
    email VARCHAR(256)
);

CREATE  TABLE IF NOT EXISTS conserts(
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    date TIMESTAMP NOT NULL,
    size SMALLINT NOT NULL,
    LOCATION VARCHAR
);

CREATE TABLE IF NOT EXISTS tariffs(
  id SERIAL PRIMARY KEY,
  price  INT,
  position  VARCHAR(128) NOT NULL,
  consert_id  INT REFERENCES conserts(id)
);

CREATE TABLE IF NOT EXISTS tickets(
    user_id INT REFERENCES users(id)
    ON DELETE SET NULL
    ON UPDATE NO ACTION,
    tariff_id INT REFERENCES tariffs(id)
    ON DELETE SET NULL
    ON UPDATE NO ACTION,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id, tariff_id)
);
`;

async function migrateSchemas() {
    const client = await pool.connect()
    try {
        await client.query(TABLE_SCHEMAS)
        console.log("ALL TABLES MIGRATEDZX ✅")
    } catch (error) {
        console.log("TABLE MIGRATION ERROR❌")
        console.log(error);
    }finally {
        client.release();
    }
}

await migrateSchemas()