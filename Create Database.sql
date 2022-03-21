#This is our file that creates the tables for our slap-stat app

#Create Team Table
-- CREATE TABLE TEAM
-- (
-- Team_ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- Name varchar(255),
-- League varchar(255),
-- Division varchar(255)
-- );

#Create Personal
-- CREATE TABLE PERSONNEL
-- (
-- Email varchar(255) NOT NULL PRIMARY KEY,
-- Team_ID int NOT NULL,
-- F_Name varchar(255),
-- L_Name varchar(255),
-- Password varchar(255),
-- FOREIGN KEY (Team_ID) REFERENCES TEAM(Team_ID)
-- );

-- #Create table Coach
-- CREATE TABLE COACH
-- (
-- Email varchar(255) NOT NULL PRIMARY KEY,
-- Team_ID int NOT NULL,
-- FOREIGN KEY (Email) REFERENCES PERSONNEL(Email),
-- FOREIGN KEY (Team_ID) REFERENCES PERSONNEL(Team_ID)
-- );


-- #Create Player Table
-- CREATE TABLE PLAYER
-- (
-- Email varchar(255) NOT NULL PRIMARY KEY,
-- Team_ID int NOT NULL,
-- Height int,
-- Weight int,
-- Handedness char,
-- Number int,
-- Position varchar(2),
-- FOREIGN KEY (Email) REFERENCES PERSONNEL(Email),
-- FOREIGN KEY (Team_ID) REFERENCES PERSONNEL(Team_ID)
-- );


#Create Game Table
-- CREATE TABLE GAME
-- (
-- Team_ID int NOT NULL,
-- Game_ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- HomeAway char,
-- Opponent varchar(255),
-- Date Date,
-- FOREIGN KEY (Team_ID) REFERENCES TEAM(Team_ID)
-- );


#Create Player_Stats Table
-- CREATE TABLE PLAYER_STATS
-- (
-- Email varchar(255) NOT NULL PRIMARY KEY,
-- Team_ID int NOT NULL,
-- GamesPlayed int,
-- Goals int,
-- Assists int,
-- Shots int,
-- Hits int,
-- F_wins int,
-- F_losses int,
-- FOREIGN KEY (Email) REFERENCES PLAYER(Email),
-- FOREIGN KEY (Team_ID) REFERENCES PLAYER(Team_ID)
-- );


#Create SHot Table
-- CREATE TABLE SHOT
-- (
-- Shot_ID int NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- X_location int,
-- Y_location int
-- );

#Create Team_Stats Table
-- CREATE TABLE TEAM_STATS
-- (
-- Team_ID int NOT NULL PRIMARY KEY,
-- Wins int,
-- Losses int,
-- PIMS int,
-- Shots_against int,
-- FOREIGN KEY (Team_ID) REFERENCES TEAM(Team_ID)
-- );


#Create Game_Sheet Table
-- CREATE TABLE GAME_SHEET
-- (
-- Game_ID int NOT NULL PRIMARY KEY,
-- Team_score int,
-- Opponent_score int,
-- Team_shots int,
-- Opponent_shots int,
-- Team_hits int,
-- F_wins int,
-- F_losses int,
-- FOREIGN KEY (Game_ID) REFERENCES GAME(Game_ID)
-- );

#Create Plays Table
-- CREATE TABLE PLAYS
-- (
-- Game_ID int NOT NULL,
-- Email varchar(255) NOT NULL,
-- FOREIGN KEY (Game_ID) REFERENCES GAME(Game_ID),
-- FOREIGN KEY (Email) REFERENCES PLAYER(Email)
-- );

#Create table Game_Logs
-- CREATE TABLE GAME_LOGS
-- (
-- Game_ID int NOT NULL,
-- Shot_ID int NOT NULL,
-- FOREIGN KEY (Game_ID) REFERENCES GAME(Game_ID),
-- FOREIGN KEY (Shot_ID) REFERENCES SHOT(Shot_ID)
-- );

#Create Team_Logs Table
-- CREATE TABLE TEAM_LOGS
-- (
-- Team_ID int NOT NULL,
-- Shot_ID int NOT NULL,
-- FOREIGN KEY (Team_ID) REFERENCES Team(Team_ID),
-- FOREIGN KEY (Shot_ID) REFERENCES SHOT(Shot_ID)
-- );

#Create Table Takes
-- CREATE TABLE TAKES
-- (
-- Team_ID int NOT NULL,
-- Shot_ID int NOT NULL,
-- Email varchar(255) NOT NULL,
-- FOREIGN KEY (Team_ID) REFERENCES PLAYER(Team_ID),
-- FOREIGN KEY (Email) REFERENCES PLAYER(Email),
-- FOREIGN KEY (Shot_ID) REFERENCES SHOT(Shot_ID)
-- );

-- #Create Table Admin
-- CREATE TABLE ADMIN
-- (
-- Email varchar(255) NOT NULL PRIMARY KEY,
-- Password varchar(255) NOT NULL
-- );