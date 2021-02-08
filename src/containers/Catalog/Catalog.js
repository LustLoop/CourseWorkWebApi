import {useDispatch, useSelector} from "react-redux";
import {fetchData, showFiltered} from "../../actions/app";
import Book from "../../components/Book/Book";
import {useEffect} from 'react'
import {Button, Switch} from "antd";
import 'antd/dist/antd.css';
import {useParams} from "react-router";
import Checkbox from "antd/es/checkbox/Checkbox";

export default function Catalog(props) {
    const books = useSelector(state => state.bookReducer.books);
    const genres = useSelector(state => state.bookReducer.genres);

    const dispatch = useDispatch();

    const { id } = useParams();

    const filters = {
        available: false,
        genres: []
    }

    useEffect(() => {
        dispatch(fetchData(id));
    }, [dispatch, id])

    function filter() {
        dispatch(showFiltered(id, filters.available, filters.genres))
    }

    function addAvailableToFilter(checked) {
        filters.available = checked;
    }

    function addGenreToFilter(genre) {
        if(genre.target.checked)
        {
            filters.genres.push(genre.target.id)
        } else {
            const index = filters.genres.indexOf(genre.target.id);
            if (index !== -1) {
                filters.genres.splice(index, 1);
            }
        }
        console.log(`checked = ${filters.genres}`);
    }

    const ToggleBoxStyle = {
        textAlign: "center",
        width: "20%",
        margin: "1rem auto",
        padding: "1rem 0",
        backgroundColor: "#6288cf",
        borderRadius: "20px"
    }

    if (books === undefined) {
        return <div>We don't have any books like this right now</div>
    }

    return (
        <div>
            <div style={ToggleBoxStyle}>
                <Switch onChange={addAvailableToFilter} />
                Show only available books
                <br/>
                {genres.map(genre => <Checkbox key={genre.id} {...genre} onChange={addGenreToFilter}>{genre.title}</Checkbox>)}
                <br/>
                <Button onClick={filter}>Get</Button>
                <br/>
            </div>
            {books.map(book => <Book key={book.id} {...book} />)}
        </div>
    )
}