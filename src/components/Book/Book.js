import {styles} from './BookStyle'
import {Card} from "antd";

const Book = ({ title, description, rating, author, genre}) => (
    <Card style={styles.BookCard}>
        <p style={styles.Rating}>Rating: {rating}/10</p>
        <p style={styles.Title}>{title}</p>
        <p style={styles.Description}>Description: {description}</p>
        <p style={styles.Author}>{author}</p>
        <p style={styles.Genre}>Genre: {genre}</p>
    </Card>
)

export default Book