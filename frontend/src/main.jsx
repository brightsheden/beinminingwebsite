import React from 'react'
import ReactDOM from 'react-dom/client'
import 'vite/modulepreload-polyfill';
import './index.css'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
import AboutUs from './pages/AboutUs';
import NavbarComponentNew from './components/Navbar'

import Footerr from './components/Footer';
import store from './store';
import AdminProjectScreen from './pages/AdminProjectScreen';
import ProjectsScreen from './pages/Projects';
import AdminTeamScreen from './pages/AdminTeamListScreen';
import AddNewTeamScreen from './pages/AddNewTeam';
import EditTeamScreen from './pages/EditTeamScreen';
import AdminBlogsDashboard from './pages/AdminBlogScreen';
import AddNewBlog from './pages/AddNewBlog';
import EditBlogScreen from './pages/EditBlog';
import Teams from './pages/TeamScreen';
import Blogs from './pages/BlogScreen';
import BlogDetails from './pages/BlogDetailScreen';
import AdminDashboard from './pages/AdminScreen';
import AdminLogin from './pages/LoginScreen';
import LoginPage from './pages/NewLogin';


const router = createHashRouter([
  {
    path: "/",
    element:<Home/> ,
  },

  {
    path: "/Aboutus",
    element:<AboutUs/> ,
  },

  {
    path: "/projects",
    element:<ProjectsScreen/> ,
  },
  {
    path: "/project/:ProjectId",
    element:<ProjectPage/> ,
  },

  {
    path: "/admin/projects",
    element:<AdminProjectScreen/> ,
  },

  {
    path: "/admin/teams",
    element:<AdminTeamScreen/> ,
  },

  {
    path: "/admin/addteam",
    element:<AddNewTeamScreen/> ,
  },

  {
    path: "/admin/editteam/:teamId",
    element:<EditTeamScreen/> ,
  },

  {
    path: "/admin/blogs",
    element:<AdminBlogsDashboard/> ,
  },
  {
    path: "/admin/addblog",
    element:<AddNewBlog/> ,
  },
  {
    path: "/admin/editblog/:blogId",
    element:<EditBlogScreen/> ,
  },

  {
    path: "/teams",
    element:<Teams/> ,
  },

  
  {
    path: "/blogs",
    element:<Blogs/> ,
  },

  {
    path: "/blog/:blogId",
    element:<BlogDetails/> ,
  },

  {
    path: "/admin/dashboard",
    element:<AdminDashboard/> ,
  },

  //{
  //  path: "/admin/login",
   // element:<AdminLogin/> ,
  //},


  {
    path: "/admin/login",
    element:<LoginPage/> ,
  },





])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    
    <Provider store={store}>
    <NavbarComponentNew/>
      <RouterProvider router={router} />
    </Provider>
    <Footerr/>
  </React.StrictMode>,
)
