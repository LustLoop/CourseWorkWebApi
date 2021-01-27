import {SHOW_ALL, SHOW_AVAILABLE} from "../constants/filterTypes";
import connect from "react-redux/lib/connect/connect";
import BooksList from "../components/BooksList";

const getVisibleBooksList = (books, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return books
        case SHOW_AVAILABLE:
            return books.filter(b => b.available)
        default:
            throw new Error('Filter ' + filter + ' is not recognised')
    }
}

const mapStateToProps = state => ({
    books: getVisibleBooksList(state.books, state.visibilityFilter)
})

export default connect(
    mapStateToProps
)(BooksList)