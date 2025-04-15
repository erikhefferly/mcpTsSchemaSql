export const sqlQueries: Record<string, string[]> = {
  'blog': [
    `CREATE TABLE posts (
      id UUID PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL
    );`,
    `CREATE INDEX idx_posts_created_at ON posts(created_at);`
  ],
  'users': [
    `CREATE TABLE users (
      id UUID PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(100) NOT NULL
    );`,
    `CREATE INDEX idx_users_email ON users(email);`
  ]
}; 