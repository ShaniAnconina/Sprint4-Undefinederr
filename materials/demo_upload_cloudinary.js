// cloudinary configuration
cloudinary.config({
    cloud_name: "dr0gkmsrl",
    api_key: "551284765655288",
    api_secret: "xWyEPHsyW3p8PAXIg5SqIRxebQk"
});

async function uploadToCloudinary(locaFilePath) {
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