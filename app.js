const express = require('express');
const app = express();
const env = require('dotenv');
env.config(); //read environment file
const folderDir = process.env.FILEPATH;
const fs = require('fs');
const os = require('os');

var listOfFiles=[]

//read files form given directory
fs.readdir(folderDir, (err, files) => {
    files.forEach(file => {
      const fullPath = fs.statSync(folderDir+file)

      //ignore folders
      if(file.includes('.')){
        
        var fileFormat = {
          name: file,
          size: fullPath.size/1000,
          Date: fullPath.atime,
          DateMs:fullPath.atimeMs
        }
        listOfFiles.push(fileFormat)
        
      }
    })

    //Display files from newest to oldest
    listOfFiles.sort((a,b)=>{return (b.DateMs-a.DateMs)})
  });
  

const port = process.env.PORT
app.set('view engine', 'ejs');
app.use(express.static(folderDir))


app.get('/', (req, res) => {
  res.render('main.ejs', {files:listOfFiles})
})

app.listen(port, () => console.log(`Server running on port ${port}!.... \nVisit: http://${os.hostname()}:${port}`))