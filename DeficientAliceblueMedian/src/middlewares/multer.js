const multer = require('multer');
const path = require('path');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Error: Images only!'));
    }
})

upload.deleteImage = function(filePath) {
    // Check if the file exists, then delete it
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting image:', err);
        } else {
            console.log('Image deleted successfully');
        }
    });
};

module.exports = upload;
