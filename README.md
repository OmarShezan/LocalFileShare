## What is it?
Given a folder location, this app will spin-up a local server that will display all the files in that folder to download.

### Why?
Mostly a fun project but there is a problem its trying to solve.

To move files from Laptop to Phone I upload it to Google Drive than download it from pnone.

Purpose of this project is to remove dependency on Google Drive. This server provies a simple web interface to download the files saved on a PC. additional benifits, anyone connected to same network can also download the files making it easy to share 1000s of files quickly between many people 

## Run it
Prerequisites: Have [NodeJS](https://nodejs.org/en/) installed globally on the PC
Make a clone of this repository, edit the .env file so it points to the folder you want to download from. 
install the node modules ``` npm install ``` from /root
run the server using ```node .\app.js``` or ```nodemon .\app.js```

## Todo
- [x] Able to download files on a phone 
- [ ] Sort by size, date or name on the webpage
- [ ] Remove dependency on express framework
- [ ] Search additional folders if theres any
- [ ] Display specific types of files only
- [ ] Create an executiable so it can be run without having NodeJs installed


## Technology
[NodeJS](https://nodejs.org/en/)] + [Express JS](https://expressjs.com/) + [ejs](https://ejs.co/)
