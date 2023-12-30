// AddNewTeamScreen.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createTeam } from '../state/Actions';
import {  resetTeamState } from '../state/Slice';

function AddNewTeamScreen() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState(null); // Updated to use null initially

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };


  const teamstate = useSelector((state)=> state.teams)
  const { selectedTeam, isRequest,isSuccess,successCreate, errorMessage} = teamstate

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createTeam({name,role,image}))
  
    setName('');
    setRole('');
    setImage(null);
  };

  const navigate = useNavigate()
  useEffect(()=>{
    if(successCreate){

      navigate('/admin/teams')
      dispatch(resetTeamState())

    }
  },[successCreate,navigate, dispatch])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 to-indigo-800 text-black">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        {isRequest && (<p className='p-4 bg-blue-200'>Loading..</p>)}
        {successCreate && (<p className='p-4 bg-blue-200'>Created Successfully</p>)}
        {errorMessage && (<p className='p-4 bg-blue-200'>{errorMessage}</p>)}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Team</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
              Team Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-800">
              Team Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-800">
              Team Image
            </label>
            <input
              type="file"
              accept="image/*"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
            />
          </div>
          {image && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-800">Image Preview</label>
              <img src={URL.createObjectURL(image)} alt="Team Preview" className="mt-2 h-32 w-full object-cover" />
            </div>
          )}
          <div className="flex items-center justify-between">
            <Link to="/admin/teams" className="text-indigo-600 hover:text-indigo-900">
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50 text-white"
            >
              Add Team
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewTeamScreen;
