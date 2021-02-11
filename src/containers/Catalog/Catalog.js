import {useDispatch, useSelector} from "react-redux";
import {fetchData, showFiltered, changePage, changeFilters} from "../../actions/app";
import Book from "../../components/Book/Book";
import {useEffect} from 'react'
import {Button, Pagination, Switch} from "antd";
import 'antd/dist/antd.css';
import Checkbox from "antd/es/checkbox/Checkbox";

export default function Catalog() {
    const books = useSelector(state => state.bookReducer.books);
    const genres = useSelector(state => state.bookReducer.genres);
    const page = useSelector(state => state.bookReducer.page);
    const filters = useSelector(state => state.bookReducer.filters);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData(1));
    }, [dispatch])

    function filter() {
        dispatch(changePage(1))
        dispatch(showFiltered(page, filters.available, filters.genres))
    }

    function changeFilterOfAvailability(checked) {
        const newFilters = filters;
        newFilters.available = checked;
        dispatch(changeFilters(newFilters))
    }

    function addGenreToFilter(genre) {
        const newFilters = filters;
        if(genre.target.checked)
        {
            newFilters.genres.push(genre.target.id)
        } else {
            const index = newFilters.genres.indexOf(genre.target.id);
            if (index !== -1) {
                newFilters.genres.splice(index, 1);
            }
        }
        dispatch(changeFilters(newFilters))
    }

    function switchPage(page) {
        dispatch(changePage(page));
        dispatch(showFiltered(page, filters.available, filters.genres));
    }

    const ToggleBoxStyle = {
        textAlign: "center",
        width: "20%",
        margin: "1rem auto",
        padding: "1rem 0",
        backgroundColor: "#6288cf",
        borderRadius: "20px"
    }

    const PaginationStyle = {
        textAlign: "center",
        margin: "1rem auto",
        padding: "1rem auto",
    }

    if (books === undefined) {
        return <div>We don't have any books like this right now</div>
    }

    return (
        <div>
            <div style={ToggleBoxStyle}>
                <Switch onChange={changeFilterOfAvailability} />
                Show only available books
                <br/>
                {genres.map(genre => <Checkbox key={genre.id} {...genre} onChange={addGenreToFilter}>{genre.title}</Checkbox>)}
                <br/>
                <Button onClick={filter}>Get</Button>
                <br/>
            </div>
            {books.map(book => <Book key={book.id} {...book} />)}
            <Pagination style={PaginationStyle} total={50} defaultCurrent={1} onChange={switchPage}/>
        </div>
    )
}