import {
    ADD_BOOK,
    CHANGE_FILTERS,
    CHANGE_PAGE,
    FETCH_BOOKS,
    FILTER_BOOKS,
} from "../containers/Catalog/Types";

const initialState = {
    books: [],
    genres: [],
    page: 1,
    filters: {
        available: false,
        genres: []
    }
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
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case CHANGE_FILTERS:
            return {
                ...state,
                filters: action.payload
            }
        default:
            return state
    }
}

export default bookReducer