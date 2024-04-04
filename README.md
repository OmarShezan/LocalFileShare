## What is it?
When provided with a folder location, this application will launch a local server, allowing users to view and download all files within the specified directory.

### Why?
Primarily a fun side project, this project aims to address a specific issue. 

Currently, the process of transferring files from a laptop to a phone involves uploading them to Google Drive and then downloading them onto the phone. The goal of this project is to eliminate the reliance on Google Drive. Instead, the server offers a straightforward web interface for downloading files stored on a PC. 

Additionally, it provides the added benefit of allowing anyone connected to the same network to access and download the files, facilitating the swift sharing of files among multiple individuals.
## Run it
Prerequisites: Have [NodeJS](https://nodejs.org/en/) installed
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
[NodeJS](https://nodejs.org/en/) + [Express JS](https://expressjs.com/) + [ejs](https://ejs.co/)
