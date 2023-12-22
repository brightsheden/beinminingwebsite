import { Alert, Card, Spinner } from 'flowbite-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProjects } from '../state/Actions';

function Projects() {
  const projectsstate = useSelector((state) => state.projects);
  const { projects, isRequest, isSuccess, errorMessage } = projectsstate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  // Use slice to limit projects to five
  const limitedProjects = projects?.slice(0, 5);

  return (
    <div className="container mx-auto py-8">
      <div className="text-center text-4xl leading-9 mb-8">
        <h1>LATEST PROJECTS</h1>
      </div>

      {errorMessage && (<Alert>{errorMessage}</Alert>)}

      {isRequest? (<Spinner></Spinner>):(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {limitedProjects?.map((project) => (
              <div key={project.id}>
                <Card className="max-w-md">
                  <img
                    className="w-full h-40 object-cover mb-4"
                    src={project.image}
                    alt={`Project: ${project.name}`}
                  />
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.name}</h5>
                </Card>
              </div>
            ))}
          </div>
    
      )}

    
      <div className="text-center mt-8">
        <Link to="/projects" className="text-indigo-600 hover:text-indigo-900 text-lg">
          View All
        </Link>
      </div>
    </div>
  );
}

export default Projects;
