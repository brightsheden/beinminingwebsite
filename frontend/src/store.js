import { configureStore } from '@reduxjs/toolkit';
import { blogReducer, loginReducer, projectReducer, teamReducer } from './state/Slice';




const store = configureStore({
    reducer:{
        projects:projectReducer,
        teams:teamReducer,
        blogs:blogReducer,
        user:loginReducer,
        
      
    }
})

export default store