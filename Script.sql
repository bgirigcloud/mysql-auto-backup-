
#Cloud Shell prompt, connect to your Cloud SQL instance by running the following:
gcloud sql connect myinstance --user=root

#Create a SQL database called guestbook on your Cloud SQL instance:
CREATE DATABASE guestbook;

#Insert the following sample data into the guestbook database:
#login database 
USE guestbook;
#create table 
CREATE TABLE entries (guestName VARCHAR(255), content VARCHAR(255),
    entryID INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(entryID));

#insert data in tables 
INSERT INTO entries (guestName, content) values ("first guest", "I got here!");
INSERT INTO entries (guestName, content) values ("second guest", "Me too!");

