import { Router } from "express";
import upload from "../../middleware/multer.js"


const ImageRouter = Router();

ImageRouter.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
      const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
      res.status(200).json({ imageUrl: imageUrl });
    });

  export default ImageRouter;