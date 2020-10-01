DROP DATABASE IF EXISTS splash_db;

CREATE DATABASE splash_db;

USE splash_db;

CREATE TABLE users (
      id INT AUTO_INCREMENT NOT NULL,
      username VARCHAR(30) NOT NULL,
      PRIMARY KEY(id)
);