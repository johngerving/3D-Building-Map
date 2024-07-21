const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer");
const fs = require("fs").promises;
const { BlobServiceClient } = require("@azure/storage-blob");
const { v1: uuidv1 } = require("uuid");
require("dotenv").config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

if (!AZURE_STORAGE_CONNECTION_STRING) {
  throw Error("Azure Storage Connection String not found");
}

// Create the BlobServiceClient object with the connection string
const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);

const containerClient = blobServiceClient.getContainerClient(
  process.env.AZURE_CONTAINER_NAME
);

router.post("/", upload.single("file"), async function (req, res) {
  try {
    if (req.file.mimetype != "image/svg+xml") {
      return res.status(400).json({ error: "File must be an SVG file" });
    }
    // Create a block blob client, naming the blob after the file
    const blockBlobClient = containerClient.getBlockBlobClient(
      req.file.filename + ".svg"
    );

    // Upload data to the blob
    const uploadBlobResponse = await blockBlobClient.uploadFile(req.file.path);

    // Delete the file from the local file system after uploading
    await fs.unlink(req.file.path);

    // Respond with URL of blob URL
    return res.status(200).json({ url: blockBlobClient.url });
  } catch (error) {
    res.status(400).json({ error: "Error uploading file" });
  }
});

module.exports = router;
