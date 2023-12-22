import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Make sure to use react-router-dom for navigation
import { editBlog, getBlogDetail } from '../state/Actions';
import axios from 'axios';
import { resetBlogState } from '../state/Slice';

// Sample function to handle image upload (replace with actual logic)
const handleImageUpload = async (file) => {
  // Implement logic to upload the image and get its URL
  // For demonstration, returning a placeholder URL
  return 'https://via.placeholder.com/150';
};

const EditBlogScreen = () => {
  // Get blogId from URL params
  const { blogId } = useParams();

  // State to manage form fields
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [uploading,setUploading] = useState('')

  // State to store the image preview URL
  const [imagePreview, setImagePreview] = useState('');
  const blogstate = useSelector((state)=> state.blogs)
  const { isRequest,isSuccess,successEdit, selectedBlog} = blogstate

  // Mock data for demonstration (replace with actual data fetching)
  const dispatch=useDispatch()
  useEffect(() => {

    if(!title ){
      dispatch(getBlogDetail( blogId))
    }

  
  }, [dispatch,title,blogId]);
  useEffect(() => {

    if(selectedBlog){

        setTitle(selectedBlog.title);
        setImage(selectedBlog.thumbnail);
        setDescription(selectedBlog.content);
        setImagePreview(selectedBlog.thumbnail);
    }

 
  }, [selectedBlog]);

  // Function to handle image change
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      // Update the image state
      setImage(file);

      // Display image preview
      const previewURL = await handleImageUpload(file);
      setImagePreview(previewURL);
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
    formData.append('blog_id', selectedBlog?.id)
    console.log("file is uploading")
    setUploading(true)

    try {
        const config = {
            "content-type" : "multipart/form/data"
        }
        const {data} =await axios.put("/api/blogs/upload/", formData,config)
        setUploading(false)
        setImage(data)
    } catch (error) {
        setUploading(false)
        
    }

}

const navigate = useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();
  
  dispatch(editBlog({ 
    blogId,
     title,
      'content':description, 
     }))

 
  
};

useEffect(()=>{
    if(successEdit){
        navigate('/admin/blogs')
        dispatch(resetBlogState())
    
      }
},[successEdit,navigate,dispatch])

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Edit Blog</h2>

      {/* Blog Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Image Field */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={uploadFileHandler}
            className="mt-1 p-2 border rounded-md w-full"
          />
          {/* Image Preview */}
          {imagePreview && (
            <img src={imagePreview} alt="Image Preview" className="mt-2 rounded-md" style={{ maxWidth: '100%' }} />
          )}
        </div>

        {/* Description Field */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <Link to="/admin/blogs" className="text-indigo-600 hover:text-indigo-900">
            Cancel
          </Link>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlogScreen;
