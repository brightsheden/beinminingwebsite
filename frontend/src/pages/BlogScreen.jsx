import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBlogs } from '../state/Actions';
import { Link } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

function Blogs() {
  const blogsState = useSelector((state) => state.blogs);
  const { blogs, isRequest, isSuccess, errorMessage } = blogsState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Explore Our Latest Blogs</h1>
        <p className="text-lg">Stay informed with our insightful blog posts.</p>
      </div>

      {/* Blog Cards Section */}
      {isRequest? (<Spinner></Spinner>):(<div className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md">
          <img src={blog?.thumbnail} alt={blog?.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{blog?.title}</h3>
            <p className="text-gray-600">{blog?.content}</p>
            <div className="mt-4">
              <Link to={`/blog/${blog?.id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>)}
      
    </div>
  );
}

export default Blogs;
