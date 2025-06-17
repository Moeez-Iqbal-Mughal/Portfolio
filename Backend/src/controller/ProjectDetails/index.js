import ProjectModel from '../../model/ProjectDetails/index.js';

async function getProjectById(req, res) {
    const projectId = req.params.id; 
    
    try {
        const project = await ProjectModel.findByPk(projectId);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.status(200).json(project);
    } catch (error) {
        console.error('Error fetching project by ID:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export default getProjectById;
