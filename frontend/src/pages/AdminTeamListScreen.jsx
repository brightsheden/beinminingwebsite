import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import AdminTeamListScreen from '../components/AdminTeamList'
import { listTeams } from '../state/Actions';
import { Alert, Spinner } from 'flowbite-react';


function AdminTeamScreen() {
  // Mock data for demo
  

  const [teams, setTeams] = useState([]);

  const teamstate = useSelector((state)=> state.teams)
  const {errorMessage,teams:teamss, isRequest,isSuccess, successDelete} = teamstate

  const dispatch = useDispatch()
  useEffect(() => {
    // Fetch teams data here (if using a backend)
    dispatch(listTeams())
    

  }, [dispatch,successDelete]);

  useEffect(()=>{
    if(teamss){
      setTeams(teamss);
    }

  },[setTeams,teamss])


  

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-100">
      <div><button className='bg-blue-500 p-2  rounded-md my-5 text-base text-white' onClick={()=>window.history.back()}>Back</button></div>
      {/* Stats Card */}
      <div className="mb-4">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total Teams</h2>
            <p className="text-gray-500">{teams.length}</p>
          </div>
        </div>
      </div>

      {/* Add Team Button */}
    
    <div>
      <Link to='/admin/addteam'>
      <button className='p-2 bg-blue-500 rounded-md hover:bg-blue-800 text-white'>Add Team</button>
      </Link>
   

    </div>
       
       
  
      {/* Team List */}

      {errorMessage && (<Alert>{errorMessage}</Alert>)}

      {isRequest? (
        <div className='text-center'>
                   <Spinner aria-label="center-aligned Extra large spinner example" size="xl" />
          
        </div>
): (<AdminTeamListScreen teams={teams} />)}
      

      {/* Add/Edit Team Modal (if needed) */}
      {/* <AddEditTeamModal /> */}
    </div>
  );
}

export default AdminTeamScreen;
