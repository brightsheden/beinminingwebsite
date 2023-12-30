import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AdminTeamListScreen from '../components/AdminTeamList';
import { listTeams } from '../state/Actions';
import { Alert, Spinner } from 'flowbite-react';
import { resetTeamState } from '../state/Slice';

function AdminTeamScreen() {
  const teamState = useSelector((state) => state.teams);
  const { errorMessage, teams, isRequest, isSuccess, successDelete } = teamState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTeams());
  }, [dispatch, successDelete]);

  useEffect(() => {
    if (successDelete && isSuccess) {
      dispatch(listTeams());
      dispatch(resetTeamState())
    }
  }, [dispatch, successDelete, isSuccess]);

  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-100">
       <div className='space-x-4'><button className='bg-blue-500 p-2  rounded-md my-5 text-base text-white' onClick={()=>window.history.back()}>Back</button>
      <Link to={'/admin/dashboard/'}><button className='bg-blue-500 p-2  rounded-md my-5 text-base text-white' >Dashboard</button></Link>
      
      </div>
      <div className="mb-4">
        <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total Teams</h2>
            <p className="text-gray-500">{teams.length}</p>
          </div>
        </div>
      </div>
      <div>
        <Link to="/admin/addteam">
          <button className="p-2 bg-blue-500 rounded-md hover:bg-blue-800 text-white">
            Add Team
          </button>
        </Link>
      </div>
      {errorMessage && <Alert>{errorMessage}</Alert>}
      {isRequest ? (
        <div className="text-center">
          <Spinner aria-label="center-aligned Extra large spinner example" size="xl" />
        </div>
      ) : (
        <>
          {successDelete && (
            <div className="bg-green-200 p-2 mb-4 rounded-md text-green-800">
              Team successfully deleted.
            </div>
          )}
          <AdminTeamListScreen teams={teams} />
        </>
      )}
    </div>
  );
}

export default AdminTeamScreen;
