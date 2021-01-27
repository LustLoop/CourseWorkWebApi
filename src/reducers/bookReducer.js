import {ADD_BOOK, FETCH_BOOKS} from "../constants/actionTypes";

const initialState = {
    books: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
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
                    rating: action.rating,
                    available: true
                }
            ]
        default:
            return state
    }
}

export default bookReducer