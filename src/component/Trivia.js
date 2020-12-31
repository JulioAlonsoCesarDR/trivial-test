import React, { Fragment, useContext, useState } from 'react'
import { Box, Button, Card, CardContent, Container } from '@material-ui/core'
import triviaContext from '../context/triviaContext';

const Trivia = () => {
    const [count, setCount] = useState(0)
    const [showQuestion, setshowQuestion] = useState(false)
    const context = useContext(triviaContext)
    const {trivia, setTriviaFn, flag,setFlagFn} = context

    const handleClick = () =>{
        setshowQuestion(!showQuestion);
        setFlagFn(true)
        if(flag) return
        setCount(count +1)
    }
    const handleNext = ()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          fetch("http://jservice.io/api/random", requestOptions)
          .then(response => response.json())
          .then(result => {
            setTriviaFn(result)
            setshowQuestion(false)
            setFlagFn(false)
            })
            .catch(error => console.log('error', error));
    }
    return (
        <Fragment>
            <Container maxWidth='xs'>
                <Box display='flex' height='100vh' alignItems='center'  justifyContent='center' >
                    {trivia.map((item) => (
                        <Card>
                            <CardContent>
                                    <Box display='flex' flexDirection='column' alignItems='center' mx={5}>
                                        <h3>BURNED QUESTIONS: {count}</h3>
                                        <h4> Category: <b>{item.category.title}</b> </h4>
                                    </Box>
                                    <Box display='flex' flex='row' alignItems='center' justifyContent='space-between'>
                                        <p>airdate: <b>"{new Date(item.airdate).toLocaleDateString()}"</b> </p>
                                        <p>difficulty:  <b>"{item.value}"</b></p>
                                    </Box>
                                    <Box display='flex' flexDirection='column' alignItems='center' textAlign='center'>
                                            {
                                                showQuestion ?
                                                <h2>
                                                    {item.answer}
                                                </h2>
                                                :
                                                <h2>
                                                    {item.question}
                                                </h2>
                                            }
                                        <Button variant="outlined" color="primary"
                                            onClick={()=>handleClick()}
                                        >
                                            {
                                                showQuestion ?
                                                    ('VIEW QUESTION')
                                                :
                                                    ('REVEAL ANSWER')
                                            }
                                        </Button>
                                        <p></p>
                                        <Button disabled = {!showQuestion} variant="contained" color="secondary"
                                        onClick={()=>handleNext()}>
                                            NEXT QUESTION
                                        </Button>
                                    </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                
            </Container>
        </Fragment>
    )
}

export default Trivia

