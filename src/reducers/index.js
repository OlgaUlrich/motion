import { combineReducers } from "redux";
import allPosts from "./posts";
import login from "./login";
import obj from "./modalObj";


const allReducers = combineReducers({
    posts: allPosts,
    login: login,
    object: obj
})

export default allReducers