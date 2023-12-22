import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { listProjects } from '../state/Actions';
import { Link } from 'react-router-dom';

import ProjectImg from '../assets/images/rough-ancient-stone-collection-heavy-with-precious-gem-fossils-generated-by-ai_188544-61147.jpg';
import NewsLetter from '../components/NewsLetter';

export default function ProjectsScreen() {
  const projectsState = useSelector((state) => state.projects);
  const { projects, isRequest, isSuccess, errorMessage } = projectsState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    <>
      <div
        className="bg-cover bg-center h-[400px] text-center flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${ProjectImg})`,
        }}
      >
        <h1 className="text-4xl font-bold">PROJECTS</h1>
      </div>

      <div className="text-center my-8">
        <h1 className="text-black text-4xl">All Projects</h1>
      </div>

      <div className="container mx-auto my-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects?.map((project) => (
          <div key={project.id} className="mb-8">
            <Link to={`/project/${project.id}`}>
              <div className="relative">
                <img className="rounded cursor-pointer w-full h-60 object-cover" src={project.image} alt={project.name} />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{project.name}</p>
                </div>
              </div>
            </Link>

            <div className="text-center border-t-2 border-gray-300 pt-4">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <span className="text-base text-blue-500">{project.year}</span>
            </div>
          </div>
        ))}
      </div>

      <NewsLetter />
    </>
  );
}
