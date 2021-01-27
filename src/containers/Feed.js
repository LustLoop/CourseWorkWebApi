import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../actions/app";
import Book from "../components/Book";
import {useEffect} from 'react'

export default function Feed() {
    const books = useSelector(state => state.bookReducer.books);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    if (books === undefined) {
        return <div>We don't have any books right now</div>
    }

    return (
        <div>
            {books.map(book => <Book key={book.id} {...book} />)}
        </div>
    )
}