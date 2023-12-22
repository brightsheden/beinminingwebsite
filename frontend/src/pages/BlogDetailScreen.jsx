import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBlogDetail } from '../state/Actions';


function BlogDetails() {
  const { blogId } = useParams();
  const blogDetailsState = useSelector((state) => state.blogs);
  const { selectedBlog:blogDetails, isRequest, isSuccess, errorMessage } = blogDetailsState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogDetail(blogId));
  }, [dispatch, blogId]);

  // Check if the blog details are still loading
  if (isRequest) {
    return <p>Loading...</p>;
  }

  // Check if there was an error loading the blog details
  if (!isSuccess) {
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div className="container mx-auto my-8">
      {/* Display Blog Details */}
      {isSuccess && (  <div className="max-w-2xl mx-auto">
        <img src={blogDetails.thumbnail} alt={blogDetails.title} className="w-full h-64 object-cover mb-4" />
        <h1 className="text-3xl font-bold mb-4">{blogDetails.title}</h1>
        <p className="text-gray-600 mb-4">{blogDetails.description}</p>
        <div dangerouslySetInnerHTML={{ __html: blogDetails.content }} />
      </div>)}
    
    </div>
  );
}

export default BlogDetails;
