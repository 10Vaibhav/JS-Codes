-- CREATE TABLE users(
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(50) UNIQUE NOT NULL,
--   email VARCHAR(255) UNIQUE NOT NULL,
--   password VARCHAR(255) NOT NUll,
--   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE addresses (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER NOT NULL,
--   city VARCHAR(100) NOT NULL,
--   country VARCHAR(100) NOT NULL,
--   street VARCHAR(255) NOT NULL,
--   pincode VARCHAR(20),
--   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
--   FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE cascade
-- );


-- INSERT INTO users (username, password, email) VALUES ('mahajan', '123456', 'mahajan@gmail.com');

-- INSERT INTO addresses (user_id, city, country, street, pincode) VALUES (2,'New York', 'USA', '123 Broadway St', '10001');


