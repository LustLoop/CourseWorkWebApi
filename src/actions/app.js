import axios from "axios";
import {ADD_BOOK, FETCH_BOOKS, FILTER_BOOKS} from "../containers/Catalog/Types";

export const fetchData = (id) => {
    return async (dispatch) => {
        const booksRequest = await axios.get('http://127.0.0.1:8000/api/books/page/' + id + '/');
        const books = booksRequest.data.map(book => {
            return {
                id: book._id,
                title: book.title,
                description: book.description,
                rating: book.rating,
                author: book.author.name,
                genre: book.genre.title,
                available: book.available
            }
        })
        const genresRequest = await axios.get('http://127.0.0.1:8000/api/genres/');
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

export const showFiltered = (id, available, genres) => {
    return async (dispatch) => {
        const request = await axios.get('http://127.0.0.1:8000/api/books/page/' + id + '/filter', {
            params: {
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
                genre: book.genre.title,
                available: book.available
            }
        })
        return dispatch ({
            type: FILTER_BOOKS,
            payload: filteredBooks
        });
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