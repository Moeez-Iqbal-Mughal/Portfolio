import { Router } from "express";
import getProjectById from "../../controller/ProjectDetails/index.js";

const projectRouter = Router();

projectRouter.get('/projects/:id', getProjectById)

export default projectRouter

