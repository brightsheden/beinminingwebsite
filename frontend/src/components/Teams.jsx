import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTeams } from '../state/Actions';

function Teams() {
  const teamsState = useSelector((state) => state.teams);
  const { teams, isRequest, isSuccess, errorMessage } = teamsState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTeams());
  }, [dispatch]);

  return (
    <div className="container mx-auto my-8 flex flex-col md:flex-row">
      <div className="p-2 w-full md:w-1/2">
        <h1 className="text-4xl leading-normal font-semibold my-5">OUR TEAM</h1>
        <span className="block text-blue-500 leading-normal tracking-tight text-xl md:text-2xl mb-5">
          PROFESSIONAL MINING MANAGEMENT
        </span>

        <span className="text-base md:w-3/4">
          Minerals is a team of dedicated mining professionals with more than 20 years of experience.
        </span>
        <button className="block my-4 bg-blue-500 text-white w-full p-4 rounded-md shadow">
          Contact Us
        </button>
      </div>

      <div className="w-full md:w-1/2 flex overflow-x-scroll gap-4 flex-col md:flex-row">
        {/* Card start here*/}
        {teams.map((member) => (
          <div key={member.id} className="text-center w-full md:w-1/3">
            <img className="w-full border-2 h-60" src={member.image} alt={member.name} />
            <div className="mt-4">
              <h2 className="text-base font-bold">{member.name}</h2>
              <span className="text-base font-semibold text-gray-500">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
