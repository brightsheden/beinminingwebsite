import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetUserState } from '../state/Slice';

const AdminDashboard = () => {
  const userstate = useSelector((state)=>state.user)
  const {userInfo} = userstate
  const navigate = useNavigate()

  useEffect(()=>{
    if(!userInfo){
        navigate('/admin/login')
    }
  })
    const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(resetUserState())
    console.log('Logout button clicked');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white text-center py-8">
        <h1 className="text-4xl font-bold">Welcome to Bein Muhammad Mining and Construction Limited Dashboard</h1>
      </div>

      {/* Card Section */}
      <div className="container mx-auto mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Teams Card */}
        <Link to="/admin/teams">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Teams</h2>
            <p className="text-gray-700">Manage and view the company's teams and personnel.</p>
          </div>
        </Link>

        {/* Projects Card */}
        <Link to="/admin/projects">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <p className="text-gray-700">Explore and manage ongoing and completed projects.</p>
          </div>
        </Link>

        {/* Blogs Card */}
        <Link to="/admin/blogs">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Blogs</h2>
            <p className="text-gray-700">Read and manage blog posts and articles.</p>
          </div>
        </Link>
      </div>

      {/* Logout Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
