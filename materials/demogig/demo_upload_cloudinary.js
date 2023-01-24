//TODO DISCARDED

// To upload image to server
const cloudinary = require("cloudinary").v2;

// To extract data from incoming request
const bodyParser = require('body-parser');

// To get file paths, remove files
const fs = require('fs')


// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cloudinary configuration
cloudinary.config({
    cloud_name: "dr0gkmsrl",
    api_key: "551284765655288",
    api_secret: "xWyEPHsyW3p8PAXIg5SqIRxebQk"
});

export async function getURL(folder,fileName){

  fs.readFile("./coudinaryURL.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const existingURL = JSON.parse(jsonString);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }

  });


async function uploadDemoToCloudinary(folder,fileName) {

  let locaFilePath = `${folder}/${fileName}`
    // locaFilePath :
    // path of image which was just uploaded to "uploads" folder
    var mainFolderName = "main"
    var filePathOnCloudinary = mainFolderName + "/" + locaFilePath
    // filePathOnCloudinary :
    // path of image we want when it is uploded to cloudinary
    return cloudinary.uploader.upload(locaFilePath,{"public_id":filePathOnCloudinary})
    .then((result) => {
      // Image has been successfully uploaded on cloudinary
      // So we dont need local image file anymore
      // Remove file from local uploads folder 
      fs.unlinkSync(locaFilePath)
      
      return {
        message: "Success",
        url:result.url
      };
    }).catch((error) => {
      // Remove file from local uploads folder 
      fs.unlinkSync(locaFilePath)
      return {message: "Fail",};
    });
  }
}