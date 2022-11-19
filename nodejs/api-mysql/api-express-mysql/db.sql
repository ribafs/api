CREATE TABLE customers (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  email varchar(200) DEFAULT NULL
);

INSERT INTO customers (id, name, email) VALUES ('Ribamar FS', 'ribafs@gmail.com');
