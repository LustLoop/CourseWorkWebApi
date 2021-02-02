import {useDispatch, useSelector} from "react-redux";
import {showAvailable, fetchData, ignoreAvailability} from "../../actions/app";
import Book from "../../components/Book/Book";
import {useEffect} from 'react'
import {Switch} from "antd";
import 'antd/dist/antd.css';

export default function Catalog() {
    let filteredBooks = useSelector(state => state.bookReducer.filteredBooks);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch])

    function filterByAvailability(checked) {
        if(checked)
        {
            dispatch(showAvailable())
        } else {
            dispatch(ignoreAvailability())
        }
    }

    const ToggleBoxStyle = {
        width: "20%",
        margin: "1rem auto",
        padding: "1rem 0",
        backgroundColor: "#6288cf",
        borderRadius: "20px"
    }

    if (filteredBooks === undefined) {
        return <div>We don't have any books like this right now</div>
    }

    return (
        <div>
            <div style={ToggleBoxStyle}>
                <Switch onChange={filterByAvailability} />
                Show only available books
            </div>

            {filteredBooks.map(book => <Book key={book.id} {...book} />)}
        </div>
    )
}