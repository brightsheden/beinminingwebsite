import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Make sure to use react-router-dom for navigation
import { createBlog } from '../state/Actions';

// Sample function to handle image upload (replace with actual logic)
const handleImageUpload = async (file) => {
  // Implement logic to upload the image and get its URL
  // For demonstration, returning a placeholder URL
  return 'https://via.placeholder.com/150';
};

const AddNewBlog = () => {
  // State to manage form fields
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');

  // State to store the image preview URL
  const [imagePreview, setImagePreview] = useState('');

  const blogstate = useSelector((state)=> state.blogs)
  const {  isRequest,isSuccess,successCreate} = blogstate

  // Function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };


  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createBlog({
        title,
        'thumbnail' : image,
        content}))

 
    setTitle('');
    setImage(null);
    setImagePreview('');
    setContent('');
  };
  
  const navigate = useNavigate()
  useEffect(()=>{
    if(successCreate){
        navigate('/admin/blogs')

    }

  },[navigate,successCreate])

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>

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
            onChange={handleImageChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
          {/* Image Preview */}
          {imagePreview && (
            <img src={imagePreview} alt="Image Preview" className="mt-2 rounded-md" style={{ maxWidth: '100%' }} />
          )}
        </div>

        {/* content Field */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBlog;
