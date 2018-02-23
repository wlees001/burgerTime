CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Animal Burger');
INSERT INTO burgers (burger_name) VALUES ('Happy Meal Burger');
INSERT INTO burgers (burger_name) VALUES ('Cheese Burger');