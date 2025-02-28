DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
    id SERIAL PRIMARY KEY, 
    task VARCHAR(255),
    isdone BOOLEAN
);


INSERT INTO todos (task, isdone) VALUES ('laundry', false);
INSERT INTO todos (task, isdone) VALUES ('laundry and cleaning', false);
INSERT INTO todos (task, isdone) VALUES ('shopping', true);
INSERT INTO todos (task, isdone) VALUES ('coding practice', false);
INSERT INTO todos (task, isdone) VALUES ('sing happy birthday', false);

