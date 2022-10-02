-- Create database and use it
CREATE DATABASE movies;
USE movies;

-- Create table for movies
CREATE TABLE `Movies` (
  `id` INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Title` VARCHAR(255) NOT NULL DEFAULT 'NULL',
  `Watched` TINYINT NOT NULL DEFAULT false,
  `Added` TINYINT NOT NULL DEFAULT false
);

-- Foreign Keys

-- Fields
