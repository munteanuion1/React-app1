import {combineReducers, createStore} from "redux";
import {applicationsReducer} from "./applications-reducer";
import {gamesReducer} from "./games-reducer";
import {commentsReducer} from "./comments-reducer";

const reducers = combineReducers({
	applications: applicationsReducer,
	games: gamesReducer,
	comments: commentsReducer
})

let store = createStore(reducers)

export default store