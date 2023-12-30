import  { useState, useEffect } from 'react';
import ProjectList from '../components/ProjectsList'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject, getProjectDetail, listProjects } from '../state/Actions';
import CreateProjectModal from '../components/CreateProjectModal';
import { resetProjectState } from '../state/Slice';
import { Alert, Spinner } from 'flowbite-react';
import { Link } from 'react-router-dom';
//import EditProjectModal from '../components/EditProjectModal';

function AdminProjectScreen() {
  const [projects, setProjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);




  const projectsstate = useSelector((state)=> state.projects)
        const {projects:projectss,isRequest,isSuccess,errorMessage, selectedProject,successEdit,successDelete} = projectsstate

        const dispatch = useDispatch()
  // Simulated functions for editing and deleting projects

  

  const openEditModalHandler = ()=>{
    setOpenEditModal(true)
  }
  const handleEdit = (projectId) => {
    // Implement logic for editing project
   
    dispatch(getProjectDetail(projectId))
    openEditModalHandler()
  };

  const handleDelete = (projectId) => {
    // Implement logic for deleting project
    dispatch(deleteProject(projectId))
    
    
  };

  useEffect(() => {
    
    dispatch(listProjects())
    
  }, [dispatch,successDelete]);

  useEffect(()=>{
    if(projectss){
      setProjects(projectss);

    }

    if(successDelete){
      dispatch(resetProjectState())
    }
  },[projectss,isSuccess,successDelete,dispatch])

  useEffect(()=>{
    if(successEdit){
      setOpenEditModal(false)
      dispatch(resetProjectState())
    }
  },[successEdit])

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="flex flex-col flex-grow p-4 bg-gray-100">
      <div className='space-x-4'><button className='bg-blue-500 p-2  rounded-md my-5 text-base text-white' onClick={()=>window.history.back()}>Back</button>
      <Link to={'/admin/dashboard/'}><button className='bg-blue-500 p-2  rounded-md my-5 text-base text-white' >Dashboard</button></Link>
      
      </div>
        {/* Stats Card */}
        <div className="flex mb-4">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
            {/* Total Projects Stat */}
            <div className="flex flex-col justify-between items-center">
              <h2 className="text-xl font-semibold">Total Projects</h2>
              <p className="text-gray-500 text-xl font-bold">{projects.length}</p>
            </div>
          </div>
        </div>

        {/* Add Project Button */}
      
        <div className="mb-4">
          <button onClick={() => setOpenModal(true)} className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white font-medium shadow hover:bg-indigo-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 3a1 1 0 011 1v5h5a1 1 0 011 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 011-1h5v-5a1 1 0 011-1Z" />
            </svg>
            <span className="ml-2">Add Project</span>
          </button>
        </div>

        {/* Project List */}
        {errorMessage && (<Alert variant='failure'>{errorMessage}</Alert>)}
        {isRequest && ( <Spinner aria-label="Extra large spinner example" size="xl" />)}
        {isSuccess && ( <ProjectList projects={projects} onDelete={handleDelete} onEdit={handleEdit} selectedProject={selectedProject} />)}
       
      </div>
      <CreateProjectModal openModal={openModal} setOpenModal={setOpenModal}/>
      
    </div>
  );
}

export default AdminProjectScreen;