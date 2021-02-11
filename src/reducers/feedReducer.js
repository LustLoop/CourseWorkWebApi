import {ADD_FEED_ITEM, GET_FEED} from "../containers/Feed/Types";

const initialState = {
    feedItems: []
}

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FEED:
            return {
                ...state,
                feedItems: action.payload
            }
        case ADD_FEED_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    text: action.text,
                }
            ]
        default:
            return state
    }
}

export default feedReducer