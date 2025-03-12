--Drop and recreate Users table if exits
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(20)
 );