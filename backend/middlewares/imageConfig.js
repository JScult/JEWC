const multer = require("multer");
const path = require("path");

// Storage configuration for images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/images"); // Store images in "uploads/images"
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// File filter to allow only image files
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"), false);
    }
};

const uploadImage = multer({ storage, fileFilter });

module.exports = uploadImage;
