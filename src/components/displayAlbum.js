import React from "react"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';




const useStyles = makeStyles({
    image: {
      width:'3rem',
      height:'3rem'
    },
    h4:{
        margin:0,
        paddingBottom:'0.3rem'
    },
    a:{
        margin:0,  
    }
  });



const DisplayAlbum=(props)=>{
    const classes = useStyles();
    let photolist=[]
    props.photosdata.forEach(photo=>{
        const price=(Math.round(Math.random()*200+50));
        photolist.push(
            <Box display="flex" flexDirection="column"  padding={1}>
                <Box display="flex" flexDirection="row"  justifyContent="space-between">
                <Card className={classes.image} xs={1}>
                        <img src={photo.thumbnailUrl} alt={"image"}/>
                </Card>
                    <Grid xs={10}>
                    <Box display="flex" flexDirection="column" alignContent="" textAlign="left" paddingBottom={1}>
                        <h4 className={classes.h4}>{photo.title}</h4>
                        <a style={{color:'#91919F'}} href={photo.url}>{photo.url}</a>
                    </Box>
                    </Grid>
                    <Grid xs={1}>
                    <Box display="flex" flexDirection="column"  textAlign="left" paddingBottom={1}>
                        <div style={price>75?{color:'#008000'}:{color:'#FF0000'}}>{'$ '+price}</div>
                        <div>10:00 AM</div>
                        </Box>
                    </Grid>
                </Box>
            </Box>
        )
    })

    return (
        <React.Fragment>
            <Box display="flex" flexDirection="column" textAlign="left">
            <h3>{props.albumsTitle}</h3>
            {photolist}
            </Box>
        </React.Fragment>
    )
}
export default DisplayAlbum