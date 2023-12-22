import{ useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // Make sure to use react-router-dom for navigation
import { deleteBlog, listBlogs } from '../state/Actions';
import { Alert } from 'flowbite-react';
import { resetBlogState } from '../state/Slice';




const AdminBlogsDashboard = () => {
  // State to store blogs data
  const [blogs, setBlogs] = useState([]);

  const blogstate = useSelector((state)=> state.blogs)
  const {isRequest,isSuccess, blogs:blogss, errorMessage,successDelete} = blogstate

 const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(listBlogs())
    },[dispatch,successDelete])


  useEffect(() => {
    if(blogss){

        setBlogs(blogss);
    }
  

  }, [blogss]); 

  // Function to handle blog deletion
  const handleDeleteBlog = (blogId) => {
    dispatch(deleteBlog(blogId))

    //setBlogs(blogs.filter((blog) => blog.id !== blogId));
  };

  useEffect(()=>{
    if(successDelete){
      dispatch(resetBlogState())
    }
  },[dispatch,successDelete])



  return (
    <div className="container mx-auto p-8">

<div><button className='bg-blue-500 p-2  rounded-md my-5 text-base text-white' onClick={()=>window.history.back()}>Back</button></div>
     
      <h2 className="text-2xl font-semibold mb-4">Admin Blogs Dashboard</h2>

      {/* Add New Blog Button */}
      <Link to="/admin/addblog" className="bg-green-500 text-white py-2 px-4 mb-4 inline-block">
        Add New Blog
      </Link>

      {isRequest && (<p>Loading...</p>)}
      {errorMessage && (<Alert color='failure'>{errorMessage}</Alert>)}
      {isSuccess && (   <table className="min-w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td className="py-2 px-4">{blog.title}</td>
              <td className="py-2 px-4">{blog.content}</td>
              <td className="py-2 px-4">
                {/* Edit Button - Link to the edit page */}
                <Link to={`/admin/editblog/${blog.id}`} className="text-blue-500 mr-2">
                  Edit
                </Link>
                {/* Delete Button - Handle deletion */}
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>)}

      {/* Blogs Table */}
   
    </div>
  );
};

export default AdminBlogsDashboard;
