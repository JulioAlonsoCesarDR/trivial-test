import React, { Fragment, useContext } from 'react'
import { Box, Button, Container } from '@material-ui/core'
import triviaContext from '../context/triviaContext';
import { useHistory } from "react-router-dom";



const Start = () => {
    const context = useContext(triviaContext)
    const {setTriviaFn} = context
    const history = useHistory();
    const handleClick = ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          fetch("http://jservice.io/api/random", requestOptions)
          .then(response => response.json())
          .then(result => {
            setTriviaFn(result)
                history.push('/trivia')
            })
            .catch(error => console.log('error', error));
    }
    return (
        <Fragment>
            <Container>
                    <Box display='flex'  height="100vh" alignItems='center' justifyContent='center'>
                        <Box display='flex' flexDirection='column'>
                            <h1>Start Game</h1>
                            <Button variant="outlined" color="primary"
                                onClick={()=>{handleClick()}}
                            >
                                Start
                            </Button>
                        </Box>
                    </Box>
            </Container>
        </Fragment>
    )
}

export default Start
