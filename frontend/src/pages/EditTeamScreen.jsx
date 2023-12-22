// EditTeamScreen.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editTeam, getTeamDetail } from '../state/Actions';
import axios from 'axios';

function EditTeamScreen() {
  const { teamId } = useParams(); // Get teamId from URL params
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const dispatch = useDispatch()
  const [teams, setTeams] = useState([]);
  const [uploading,setUploading]  = useState('')

  const teamstate = useSelector((state)=> state.teams)
  const {isLoading, selectedTeam, isRequest,isSuccess,successEdit} = teamstate
  useEffect(() => {

    if(!name ){
      dispatch(getTeamDetail( teamId))
    }

  
  }, [dispatch,name,teamId]);

  useEffect(()=>{
    if(selectedTeam){
      setName(selectedTeam.name)
      setRole(selectedTeam.role)
      setImage(selectedTeam.image)
      setImagePreview(selectedTeam.image)
    }
  },[selectedTeam])

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const uploadFileHandler = async  (e)=>{
    const file = e.target.files[0]

    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    
    const formData = new FormData()
    formData.append('image',file)
    formData.append('team_id', selectedTeam?.id)
    console.log("file is uploading")
    setUploading(true)

    try {
        const config = {
            "content-type" : "multipart/form/data"
        }
        const {data} =await axios.put("/api/teams/upload/", formData,config)
        setUploading(false)
        setImage(data)
    } catch (error) {
        setUploading(false)
        
    }

}

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(editTeam({ 
      teamId,
       name,
        role, 
       }))
  
    if(successEdit){
      navigate('/admin/teams')

    }
    
  };

  

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 bg-gradient-to-r from-purple-700 to-indigo-800 ">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Edit Team</h2>
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
              className="mt-1 p-2 text-black border rounded-md w-full focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-800">
              Team Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={uploadFileHandler}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-indigo-500"
            />
            {imagePreview && (
              <img src={imagePreview} alt="Team Preview" className="mt-2 w-full h-32 object-cover rounded-md" />
            )}
          </div>
          <div className="flex items-center justify-between">
            <Link to="/admin/teams" className="text-indigo-600 hover:text-indigo-900">
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTeamScreen;
