
import { useDispatch ,useSelector} from 'react-redux'

import DisplayAlbum from './displayAlbum'
import React, { useEffect, useState } from 'react'
import {fetchAlbumData,fetchPhotoData} from '../store/fetchData'

import Box from '@material-ui/core/Box';






const Albums=()=>{

    const [search,setSearch]=useState('')

    const dynamicSearch=(selectedphotos,searched)=>{
        const lst=[]
        for(let photo of selectedphotos){
            console.log(photo)
            if(photo.title.search(searched)>=0){
                lst.push(photo)
            }
        }
        return lst
    }

    const changeHandler=(event)=>{
        setSearch(event.target.value);
    }

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchAlbumData())
        dispatch(fetchPhotoData())
    },[dispatch])

    const albumsState=useSelector(state=>state.albums)
    const photosState=useSelector(state=>state.photos)

    let selectedAlbums=[];
    let selectedphotos=[];

    let displayEachAlbum=[]
    
    if(albumsState.length && photosState.length){
        for(let i of [1,2,3,4,5]){
            selectedAlbums=albumsState.filter(album=>album.id===i)
            selectedphotos=photosState.filter(photo=>photo.albumId===i).slice(0,10)
            console.log(selectedphotos)
            const searchedPhotos=dynamicSearch(selectedphotos,search)
            let searchedAlbums=''
            if(searchedPhotos.length){
                searchedAlbums=selectedAlbums[0].title
            }

            displayEachAlbum.push(<DisplayAlbum key={selectedphotos.id} albumsTitle={searchedAlbums} photosdata={searchedPhotos} />)
 
        }
    }
    return(
        <React.Fragment>
          
            <input style={{width:"80rem",padding:'0.5rem',}} type="text" value={search} onChange={changeHandler} placeholder="See your financial report" />

        <Box display="flex" flexDirection="column"  paddingLeft={4} padding={2}>
            {displayEachAlbum}
        </Box>
        </React.Fragment>
    )
}
export default Albums;
