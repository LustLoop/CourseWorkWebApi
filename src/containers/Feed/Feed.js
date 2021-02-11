import {useSelector} from "react-redux";

export default function Feed() {
    let feed = useSelector(state => state.feedReducer.feedItems);
}