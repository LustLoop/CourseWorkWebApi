import axios from "axios";
import {ADD_BOOK, FETCH_BOOKS} from "../constants/actionTypes";

export const fetchData = () => {
    return async (dispatch) => {
        const request = await axios.get('http://127.0.0.1:8000/books/');
        const fetchedData = request.data.map(book => {
            return {id: book._id, title: book.title}
        })
        return dispatch ({
            type: FETCH_BOOKS,
            payload: fetchedData
        });
    }
}

export const addBook = (data) => {
    const request = axios.post('http://127.0.0.1:8000/books/', data);
    return {
        type: ADD_BOOK,
        payload: request
    }
}