import {
    ADD_BOOK,
    FETCH_BOOKS,
    FILTER_BOOKS,
} from "../containers/Catalog/Types";

const initialState = {
    books: [],
    genres: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload.books,
                genres: action.payload.genres
            }
        case ADD_BOOK:
            return [
                ...state,
                {
                    id: action.id,
                    description: action.description,
                    rating: action.rating,
                    available: action.available
                }
            ]
        case FILTER_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state
    }
}

export default bookReducer