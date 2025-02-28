DROP TABLE IF EXISTS users; 


CREATE TABLE users (
id SERIAL PRIMARY KEY, 
email VARCHAR(255)
); 


INSERT INTO users (email) VALUES ('test@gmail.com');