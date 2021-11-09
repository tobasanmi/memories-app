import {Container, AppBar, Typography, Grow,Grid} from '@material-ui/core'
import memories from './componets/Images/mario.png'
import Posts from './componets/Posts/Posts'
import Form from './componets/Forms/Form' 
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import React,  {useEffect} from 'react'
import {getPosts} from './actions/posts'


function App() {
  const classes = useStyles();
  const dispatch = useDispatch() 
  useEffect(() => {
      dispatch(getPosts())
  },[dispatch])

  return ( 
    <Container maxWidth = 'lg '>
        <AppBar className = {classes.appBar} position = "static" color = "inherit">
          <Typography className = {classes.heading} variant = "h2" align = "center">
                SaveYourMemories
          </Typography>
          <img src = {memories} alt = "memories" height = "60"  className = {classes.image} />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify = "space-between" alignItems = "stretch" spacing = {3}>
                <Grid item xs ={12} s = {7}>
                  <Posts/>
                </Grid>
                <Grid item xs ={12} s = {4}>
                  <Form/>
                </Grid>
            </Grid>
          </Container>
        </Grow>
    </Container>
  );
}

export default App;
