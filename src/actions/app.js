import axios from "axios";
import {ADD_BOOK, CHANGE_FILTERS, CHANGE_PAGE, FETCH_BOOKS, FILTER_BOOKS} from "../containers/Catalog/Types";

export const fetchData = (page) => {
    return async (dispatch) => {
        const booksRequest = await axios.get('http://127.0.0.1:8000/api/books/page/', {
            params: {
                page
            }
        });
        const books = booksRequest.data.map(book => {
            return {
                id: book._id,
                title: book.title,
                description: book.description,
                rating: book.rating,
                author: book.author.name,
                genres: book.genres,
                available: book.available
            }
        })
        const genresRequest = await axios.get('http://127.0.0.1:8000/api/genres/', {
            params: {
                page
            }
        });
        const genres = genresRequest.data.map(genre => {
            return {
                id: genre._id,
                title: genre.title,
            }
        })
        return dispatch ({
            type: FETCH_BOOKS,
            payload: {books, genres}
        });
    }
}

export const showFiltered = (page, available, genres) => {
    return async (dispatch) => {
        const request = await axios.get('http://127.0.0.1:8000/api/books/page/filter', {
            params: {
                page,
                available,
                genres
            }
        });
        const filteredBooks = request.data.map(book => {
            return {
                id: book._id,
                title: book.title,
                description: book.description,
                rating: book.rating,
                author: book.author.name,
                genres: book.genres,
                available: book.available
            }
        })
        return dispatch ({
            type: FILTER_BOOKS,
            payload: filteredBooks
        });
    }
}

export const changePage = (page) => {
    return(dispatch) => {
        dispatch({
            type: CHANGE_PAGE,
            payload: page
        })
    }
}

export const changeFilters = (filters) => {
    return(dispatch) => {
        dispatch({
            type: CHANGE_FILTERS,
            payload: filters
        })
    }
}

export const addBook = (data) => {
    return async (dispatch) => {
        const request = await axios.post('http://127.0.0.1:8000/api/books/', data);
        return dispatch ({
            type: ADD_BOOK,
            payload: request
        })
    }
}