-- SQL file to initialize database and table to hold entries from user
-- create the database if it is not there already
CREATE DATABASE IF NOT EXISTS user_entries;
GO

-- create the notes table if its not on there already
CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    userEntry TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);