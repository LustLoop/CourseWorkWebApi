import axios from "axios";
import {ADD_BOOK, FETCH_BOOKS, IGNORE_AVAILABILITY, SHOW_AVAILABLE} from "../containers/Catalog/Types";

export const fetchData = () => {
    return async (dispatch) => {
        const request = await axios.get('http://127.0.0.1:8000/api/books/');
        const fetchedData = request.data.map(book => {
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
            type: FETCH_BOOKS,
            payload: fetchedData
        });
    }
}

export const showAvailable = () => {
    return {
        type: SHOW_AVAILABLE,
    }
}

export const ignoreAvailability = () => {
    return {
        type: IGNORE_AVAILABILITY,
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