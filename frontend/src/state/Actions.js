import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




//login actions
export const login = createAsyncThunk('auth/login', async ({ email, password }, { rejectWithValue }) => {
  console.log(email,password)
  try {
      const config = {
          headers: {
              'Content-type': 'application/json'
          }
      }
      

      const { data } = await axios.post(
          '/api/login/',
          { 'username': email, 'password': password },
          config
      );



   
      
      localStorage.setItem('userInfo', JSON.stringify(data));
      //localforage.setItem('userInfo', JSON.stringify(data))
      
  
      return data;

      

  } catch (error) {
      return rejectWithValue(error.message);
  }
});

// Action to list projects
export const listProjects = createAsyncThunk('project/list', async (arg,{rejectWithValue}) => {
 

  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      
      },
    };

    const { data } = await axios.get('/api/projects/', config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to get a project detail
export const getProjectDetail = createAsyncThunk('project/detail', async (projectId,{ rejectWithValue }) => {


  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
       
      },
    };

    const { data } = await axios.get(`/api/projects/${projectId}/`, config);
    return data;
  } catch (error) {
    return  rejectWithValue(error.message)
  }
});

// Action to create a project
export const createProject = createAsyncThunk('project/create', async (newProjectData,{rejectWithValue}) => {


  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
       
      },
    };

    const { data } = await axios.post('/api/projects/', newProjectData, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to edit a project
export const editProject = createAsyncThunk('project/edit', async (projectData,{rejectWithValue}) => {
 console.log(projectData)

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
       
      },
    };

    

    const { data } = await axios.put(`/api/projects/${projectData.id}/`, projectData, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to delete a project
export const deleteProject = createAsyncThunk('project/delete', async (projectId, {rejectWithValue}) => {


  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
     
      },
    };

    const { data } = await axios.delete(`/api/projects/${projectId}/`, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});



// Action to list teams
export const listTeams = createAsyncThunk('team/list', async (arg,{rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.get('/api/teams/', config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to get a team detail
export const getTeamDetail = createAsyncThunk('team/detail', async (teamId, {rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/teams/${teamId}/`, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to create a team
export const createTeam = createAsyncThunk('team/create', async (newTeamData,{rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post('/api/teams/', newTeamData, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to edit a team
export const editTeam = createAsyncThunk('team/edit', async (teamData, {rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(`/api/teams/${teamData.teamId}/`, teamData, config);
    console.log(teamData )
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to delete a team
export const deleteTeam = createAsyncThunk('team/delete', async (teamId, {rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.delete(`/api/teams/${teamId}/`, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});


// Action to list blogs
export const listBlogs = createAsyncThunk('blog/list', async (arg,{rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.get('/api/blogs/', config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to get a blog detail
export const getBlogDetail = createAsyncThunk('blog/detail', async (blogId, {rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.get(`/api/blogs/${blogId}/`, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to create a blog
export const createBlog = createAsyncThunk('blog/create', async (newBlogData, {rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post('/api/blogs/', newBlogData, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to edit a blog
export const editBlog = createAsyncThunk('blog/edit', async (blogData, {rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(`/api/blogs/${blogData.blogId}/`, blogData, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});

// Action to delete a blog
export const deleteBlog = createAsyncThunk('blog/delete', async (blogId,{rejectWithValue}) => {
  try {
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    };

    const { data } = await axios.delete(`/api/blogs/${blogId}/`, config);
    return data;
  } catch (error) {
    return rejectWithValue(error.message)
  }
});



