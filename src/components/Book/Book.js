import {styles} from './BookStyle'
import {Card} from "antd";

export default function Book (props) {
        return (
            <Card style={styles.BookCard}>
                <p style={styles.Rating}>Rating: {props.rating}/10</p>
                <p style={styles.Title}>{props.title}</p>
                <p style={styles.Description}>Description: {props.description}</p>
                <p style={styles.Author}>{props.author}</p>
                <p>Genre: {props.genre}</p>
            </Card>
        )
}