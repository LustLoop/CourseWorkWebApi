import {ADD_BOOK, FETCH_BOOKS, IGNORE_AVAILABILITY, SHOW_AVAILABLE} from "../containers/Catalog/Types";

const initialState = {
    books: [],
    filteredBooks: []
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS:
            return {
                ...state,
                books: action.payload,
                filteredBooks: action.payload
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
        case SHOW_AVAILABLE:
            return {
                ...state,
                filteredBooks: state.books.filter(book => book.available)
            }
        case IGNORE_AVAILABILITY:
            return {
                ...state,
                filteredBooks: state.books
            }
        default:
            return state
    }
}

export default bookReducer