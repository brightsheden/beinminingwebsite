import {  createSlice } from '@reduxjs/toolkit';
import { createBlog, createProject, deleteBlog, deleteProject, editBlog, editProject, getBlogDetail, getProjectDetail, listBlogs, listProjects, login } from './Actions';
import { createTeam, deleteTeam, editTeam, getTeamDetail, listTeams } from './Actions';

// Slice for projects
export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projects: [],
    selectedProject: null,
    isRequest: false,
    isSuccess: false,
    successEdit:false,
    successCreate:false,
    successDelete:false,
    errorMessage: '',
  },
  reducers: {
    resetProjectState: (state) => {
      //state.projects = [];
      state.selectedProject = null;
      state.isRequest = false;
      //state.isSuccess = false;
      state.successCreate =false;
      state.successEdit=false;
      state.successDelete=false
      state.errorMessage = '';
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(listProjects.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(listProjects.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.projects = action.payload;
      })
      .addCase(listProjects.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(getProjectDetail.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(getProjectDetail.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.selectedProject = action.payload;
      })
      .addCase(getProjectDetail.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(createProject.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.successCreate = true;
        state.projects = [...state.projects, action.payload]
      })
      .addCase(createProject.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.successCreate=true;
        state.errorMessage = action.payload;
      })
      .addCase(editProject.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.successEdit=true;
        // Update the edited project in the list
        const updatedProjects = state.projects.map(project =>
          project.id === action.payload.id ? action.payload : project
        );
        state.projects = updatedProjects;
      })
      .addCase(editProject.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.successEdit=false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteProject.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isRequest = false;
        //state.isSuccess = true;
       state.successDelete = true
        // Remove the deleted project from the list
        state.data = action.payload
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});




// Slice for teams
export const teamSlice = createSlice({
  name: 'team',
  initialState: {
    teams: [],
    selectedTeam: null,
    isRequest: false,
    isSuccess: false,
    successEdit: false,
    successCreate: false,
    successDelete: false,
    errorMessage: '',
  },
  reducers: {
    resetTeamState: (state) => {
      state.selectedTeam = null;
      state.isRequest = false;
      state.isSuccess = false;
      state.successCreate=false;
      state.successDelete=false
      state.errorMessage = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listTeams.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(listTeams.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.teams = action.payload;
      })
      .addCase(listTeams.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(getTeamDetail.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(getTeamDetail.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.selectedTeam = action.payload;
      })
      .addCase(getTeamDetail.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(createTeam.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(createTeam.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.successCreate = true;
        state.teams = [...state.teams, action.payload];
      })
      .addCase(createTeam.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
      
        state.errorMessage = action.payload;
      })
      .addCase(editTeam.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(editTeam.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.successEdit = true;
        // Update the edited team in the list
        const updatedTeams = state.teams.map(team =>
          team.id === action.payload.id ? action.payload : team
        );
        state.teams = updatedTeams;
      })
      .addCase(editTeam.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.successEdit = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteTeam.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(deleteTeam.fulfilled, (state, action) => {
        state.isRequest = false;
        state.successDelete = true;
        // Remove the deleted team from the list
      
        state.teams = state.teams.filter(team => team.id !== action.payload.id);
      })
      .addCase(deleteTeam.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});



const initialState = {
  blogs: [],
  selectedBlog: null,
  isRequest: false,
  isSuccess: false,
  successEdit: false,
  successCreate: false,
  successDelete: false,
  errorMessage: '',
};

// Slice for blogs
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    resetBlogState: (state) => {
      state.selectedBlog = null;
      state.isRequest = false;
      state.isSuccess = false;
      state.errorMessage = '';
      state.successEdit = false;
      state.successCreate = false;
      state.successDelete = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listBlogs.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(listBlogs.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(listBlogs.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(getBlogDetail.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(getBlogDetail.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.selectedBlog = action.payload;
      })
      .addCase(getBlogDetail.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      .addCase(createBlog.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true; 
        state.successCreate =true;
        state.blogs = [...state.blogs, action.payload];
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.successCreate= false;
        state.errorMessage = action.payload;
      })
      .addCase(editBlog.pending, (state) => {
        state.isRequest = true;
      }) 
      .addCase(editBlog.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.successEdit = true;
        // Update the edited blog in the list
        const updatedBlogs = state.blogs.map(blog =>
          blog.id === action.payload.id ? action.payload : blog
        );
        state.blogs = updatedBlogs;
      })
      .addCase(editBlog.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.successEdit = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteBlog.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.isRequest = false;
        state.successDelete = true;
        // Remove the deleted blog from the list
        state.blogs = state.blogs.filter(blog => blog.id !== action.payload.id);
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      });
  },
});


const userInfoFromStorage = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null




export const loginSlice = createSlice({
  name: "user",
  initialState : {
    userInfo:  userInfoFromStorage,
  
    isRequest: false,
    isSuccess: false,
    errorMessage: "",
  },
  
  reducers: {
    resetUserState: (state) => {
      state.isRequest = false;
      state.isSuccess = false;
      state.errorMessage = "";
      state.data = null;
      state.userInfo = null
      localStorage.removeItem('userInfo');
      localStorage.removeItem('userProfile');
    },
  },

  
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isRequest = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isRequest = false;
        state.isSuccess = true;
        state.data = action.payload;
        state.userInfo = state.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.isRequest = false;
        state.isSuccess = false;
        state.errorMessage = action.payload;
      })
      

  },
});


// Export actions and reducer
export const { resetBlogState } = blogSlice.actions;
export const blogReducer = blogSlice.reducer;




// Export actions and reducer
export const { resetTeamState } = teamSlice.actions;
export const teamReducer = teamSlice.reducer;

// Export actions and reducer
export const { resetProjectState } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
export const loginReducer = loginSlice.reducer;
export const {resetUserState} = loginSlice.actions
