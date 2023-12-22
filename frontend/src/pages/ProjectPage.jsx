import { FaCalendar, FaLocationPin, FaMoneyBill, FaUser } from 'react-icons/fa6';
import NewsLetter from '../components/NewsLetter';
import { useEffect } from 'react';
import { getProjectDetail } from '../state/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProjectPage() {
  const projectsState = useSelector((state) => state.projects);
  const { selectedProject, isRequest, isSuccess, errorMessage } = projectsState;

  const dispatch = useDispatch();
  const { ProjectId } = useParams();

  useEffect(() => {
    dispatch(getProjectDetail(ProjectId));
  }, [dispatch, ProjectId]);

  return (
    <>
      <div
        className={`bg-cover bg-center h-[400px] text-center flex flex-col items-center justify-center text-white`}
        style={{
          backgroundImage: `url(${selectedProject?.image})`,
        }}
      >
        <h1 className="text-4xl font-bold">PROJECTS</h1>
      </div>

      <div className="container mx-auto my-8 gap-8 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 md:mr-8">
          <h1 className="text-3xl leading-normal font-bold my-4">{selectedProject?.name}</h1>

          <article className="text-base my-4">{selectedProject?.description}</article>

          <button className="p-5 bg-blue-500 w-full md:w-80 text-white font-semibold text-xl my-4">Contact Us</button>
        </div>

        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <img className="w-full" src={selectedProject?.image} alt={selectedProject?.name} />
          </div>

          <div className="text-2xl mb-4">More Photos</div>

          <ul className="text-lg">
            <li className="flex gap-4 items-center">
              <span className="text-xl text-blue-500 flex items-center flex-row">
                <FaUser className="text-2xl" />
              </span>
              <span className="text-xl font-semibold">Client: {selectedProject?.client}</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-xl text-blue-500 flex items-center flex-row">
                <FaCalendar className="text-2xl" />
              </span>
              <span className="text-xl font-semibold">Year: {selectedProject?.year}</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-xl text-blue-500 flex items-center flex-row">
                <FaLocationPin className="text-2xl" />
              </span>
              <span className="text-xl font-semibold">Location: {selectedProject?.location}</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="text-xl text-blue-500 flex items-center flex-row">
                <FaMoneyBill className="text-2xl" />
              </span>
              <span className="text-xl font-semibold">Value: {selectedProject?.value}</span>
            </li>
          </ul>
        </div>
      </div>

      <NewsLetter />
    </>
  );
}

export default ProjectPage;
