CREATE DATABASE IF NOT EXISTS investmentdb;

USE investmentdb;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id_user INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    eamil VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_user),
    CONSTRAINT UQ_Usuarios_Email UNIQUE (email)
);