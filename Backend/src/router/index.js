import { Router } from "express";
import projectRouter from "./ProjectDetails/index.js";
import contactRouter from "./Contact/index.js";
import ImageRouter from "./ImageUploading/index.js";


const allRouter = Router();
allRouter.use(projectRouter);
allRouter.use(contactRouter);
allRouter.use(ImageRouter);

export default allRouter