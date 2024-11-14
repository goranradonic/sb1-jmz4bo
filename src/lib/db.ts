import Database from 'better-sqlite3';
import { join } from 'path';

const db = new Database(join(process.cwd(), 'posts.db'));

// Create posts table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export function getPosts() {
  return db.prepare('SELECT * FROM posts ORDER BY createdAt DESC').all();
}

export function createPost(title: string, content: string) {
  const stmt = db.prepare('INSERT INTO posts (title, content) VALUES (?, ?)');
  const result = stmt.run(title, content);
  return {
    id: result.lastInsertRowid,
    title,
    content,
    createdAt: new Date(),
    updatedAt: new Date()
  };
}

export default db;