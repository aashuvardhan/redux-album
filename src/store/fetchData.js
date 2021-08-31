import {albumActions} from '../store/index'

export const fetchAlbumData=()=>{
    return async(dispatch)=>{
        const fetchData=async ()=>{
            const response=await fetch('https://jsonplaceholder.typicode.com/albums');
            if(!response.ok){
                throw new Error('could not fetch cart data')
            }
            const data=await response.json();
            return data;
        }
        try{
            
           const albumData=await fetchData() ;
           dispatch(albumActions.setAlbums(albumData))      
        }catch(error){
            throw new Error('Fetching cart data failed')
        }
    }
}

export const fetchPhotoData=()=>{
    return async(dispatch)=>{
        const fetchData=async ()=>{
            const response=await fetch('https://jsonplaceholder.typicode.com/photos');
            if(!response.ok){
                throw new Error('could not fetch cart data')
            }
            const data=await response.json();
            return data;
        }
        try{
           const photoData=await fetchData() 
           dispatch(albumActions.setPhotos(photoData))      
        }catch(error){
            throw new Error('Fetching cart data failed')
        }
    }
}