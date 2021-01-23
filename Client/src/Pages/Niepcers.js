
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import '../App.css';
import Posts1 from '../components/Posts/Posts1';
import Form from '../components/Form/Form';
import { getPosts } from '../Actions/PostActions';
import useStyles from '../styles';
import memories from '../images/camera.png';


const Niepcers = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    // useEffect(() => {
    //   dispatch(getPosts());
    // }, [currentId, dispatch]);
  
    return (
      <div className='holder'>
        <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color={'inherit'}>
        <Typography className={classes.heading} variant="h2" align="center"></Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts1 setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container></div>
    )
}

export default Niepcers
