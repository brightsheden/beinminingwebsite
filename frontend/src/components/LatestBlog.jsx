import { useDispatch, useSelector } from 'react-redux'
import blogimg from '../assets/images/rough-ancient-stone-collection-heavy-with-precious-gem-fossils-generated-by-ai_188544-61147.jpg'
import {FaClock, FaUser} from 'react-icons/fa'
import { useEffect } from 'react'
import { listBlogs } from '../state/Actions'
import { Spinner } from 'flowbite-react'
import { Link } from 'react-router-dom'


function LatestBlog() {

    const blogstate = useSelector((state)=> state.blogs)
    const {blogs, isRequest,isSuccess} = blogstate

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(listBlogs())
    },[dispatch])

  return (
    <div className='container mx-auto my-8 flex flex-col md:flex-row gap-4 '>
        <div>
            <img className='h-full' src={'https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?w=740&t=st=1702904911~exp=1702905511~hmac=b755312f37b4bfc5cd0aee153436a283103b2eb0580b0ce158ad9a4606ff1abf'} alt='blogimage'/>

        </div>
        <div>
            <div className='text-center'>
            <h1 className='text-2xl md:text-4xl leading-normal'>LATEST NEWS</h1>
            </div>

            {isRequest &&  (<Spinner/>)}

            {isSuccess && (<div>          {blogs?.map((blog)=>(
                      <div key={blog.id}>
                      <div className='p-2 w-[100%] border-b '>
                          <h2 className='text-2xl md:text-4xl  text-underline mb-5'>{blog.title}</h2>
                          <div className='flex gap-8'>
                             <span className='flex items-center gap-2'> <FaClock className='text-blue-500'/>{blog.date_created.slice(0,10)}</span>
                             <span className='flex gap-2 items-center'><FaUser className='text-blue-500'/> Admin</span>
                          </div>
                      </div>
                      </div>
                    
                ))}
          
            </div>)}

      

           

            <div className='flex justify-center mt-2'>
                <button className='text-xl bg-blue-500 w-full rounded p-4 text-white'>
                    <Link to='/blogs'>View all</Link>
                 
                    </button>
            </div>

            
        

        </div>
    </div>
  )
}

export default LatestBlog