import multer from "multer";

const storage = multer.diskStorage({
    filename:function(reqfile,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage})

export default upload