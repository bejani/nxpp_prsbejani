import Database from "better-sqlite3";
import path from "path";

// Define the path to your database
const dbPath = path.resolve(process.cwd(), "data.db");

// Initialize the SQLite database
const db = new Database(dbPath);

// Create a table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS page_hits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page TEXT NOT NULL,
    hits INTEGER NOT NULL DEFAULT 0
  );
`);

export default db;
