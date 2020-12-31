import { SET_TRIVIA, SET_FLAG } from "./typeTrivia"

export default (state, action) => {
    switch (action.type) {
        case SET_TRIVIA:
            return {
                ...state,
                trivia: action.data
            }
            case SET_FLAG:
            return {
                ...state,
                flag: action.data
            }
        default:
            return state
    }
}