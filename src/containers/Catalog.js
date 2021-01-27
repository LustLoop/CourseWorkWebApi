import {useDispatch, useSelector} from "react-redux";
import {changeFilter, fetchData} from "../actions/app";
import Book from "../components/Book/Book";
import {useEffect} from 'react'
import {Switch} from "antd";
import 'antd/dist/antd.css';

export default function Catalog() {
    let books = useSelector(state => state.bookReducer.books);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    function onChange(checked) {
        dispatch(changeFilter(checked))
        console.log(books)
    }

    const ToggleBoxStyle = {
        width: "20%",
        margin: "1rem auto",
        padding: "1rem 0",
        backgroundColor: "#6288cf",
        borderRadius: "20px"
    }

    if (books === undefined) {
        return <div>We don't have any books right now</div>
    }

    return (
        <div>
            <div style={ToggleBoxStyle}>
                <Switch onChange={onChange} />
                Show only available books
            </div>

            {books.map(book => <Book key={book.id} {...book} />)}
        </div>
    )
}