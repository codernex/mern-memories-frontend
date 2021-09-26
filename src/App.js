import React, { useEffect,useState } from 'react'
import { Container, Typography, Grow, Grid, AppBar } from '@material-ui/core'
import memories from './images/memories.png'
import { Posts, Form } from './components'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { fetchPosts } from './actions/posts'

const App = () => {
    const [currentId,setCurrentId]= useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch,currentId]);

    return (
        <Container maxWidth={'lg'}>
            <AppBar className={classes.appBar} position={"static"} color={'inherit'}>
                <Typography className={classes.heading} variant={"h2"} align={"center"}>
                    WSL Learner
                </Typography>
                <img className={classes.image} src={memories} alt={"memories"} height={"60"} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify={"space-between"} alignItems={"stretch"} spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts   setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>

            </Grow>

        </Container>
    )
}

export default App
