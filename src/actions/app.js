import axios from "axios";
import {ADD_BOOK, FETCH_BOOKS} from "../constants/actionTypes";

export const fetchData = () => {
    return async (dispatch) => {
        const request = await axios.get('http://127.0.0.1:8000/books/');
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

export const changeFilter = (hide) => {
    return async (dispatch) => {
        if (hide) {
            const request = await axios.get('http://127.0.0.1:8000/books/');
            const fetchedData = request.data.map(book => {
                if(book.available)
                {
                    return {
                        id: book._id,
                        title: book.title,
                        description: book.description,
                        rating: book.rating,
                        author: book.author.name,
                        genre: book.genre.title,
                        available: book.available
                    }
                }
            })
            return dispatch ({
                type: FETCH_BOOKS,
                payload: fetchedData.filter(b => b)
            });
        } else {
            const request = await axios.get('http://127.0.0.1:8000/books/');
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
}

export const addBook = (data) => {
    return async (dispatch) => {
        const request = await axios.post('http://127.0.0.1:8000/books/', data);
        return dispatch ({
            type: ADD_BOOK,
            payload: request
        })
    }
}