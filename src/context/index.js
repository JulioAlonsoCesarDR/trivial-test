import React, { useReducer } from 'react'
import triviaContext from './triviaContext';
import triviaReducer from './triviaReducer';
import { SET_TRIVIA, SET_FLAG } from './typeTrivia';

const TriviaState = props => {
    const initialState = {
        trivia:[],
        flag: false
    }
    const [state, dispatch] = useReducer(triviaReducer, initialState);

    const setTriviaFn = (data) => {
        dispatch({type: SET_TRIVIA,
        data:data})
    }
    const setFlagFn = (data) => {
        dispatch({type: SET_FLAG,
        data:data})
    }
    return (
        <triviaContext.Provider
            value={{
                trivia:state.trivia,
                flag: state.flag,
                setTriviaFn,
                setFlagFn
            }}
        >
            {props.children}
        </triviaContext.Provider>
    )
}


export default TriviaState
