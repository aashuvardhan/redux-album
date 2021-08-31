import {createSlice,configureStore, applyMiddleware } from '@reduxjs/toolkit'
import thunk from "redux-thunk";


const albumReducers=createSlice({
	name:'albums',
	initialState:{
        albums:[],
        photos:[]
    },
	reducers:{

        setAlbums(state,action){
            state.albums=action.payload
        },
        setPhotos(state,action){
            
            state.photos=action.payload
        }
    }
})

const store=configureStore({
    reducer:albumReducers.reducer
}, applyMiddleware(thunk));


export const albumActions=albumReducers.actions;
export default store;