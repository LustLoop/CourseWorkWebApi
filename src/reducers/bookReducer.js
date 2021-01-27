import {ADD_BOOK, FETCH_BOOKS} from "../constants/actionTypes";

const initialState = {
    books: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            console.log("shit " + action)
            return {
                ...state,
                books: action.payload
            }
        case ADD_BOOK:
            return [
                ...state,
                {
                    id: action.id,
                    description: action.description,
                    available: false
                }
            ]
        default:
            return state
    }
}

export default bookReducer