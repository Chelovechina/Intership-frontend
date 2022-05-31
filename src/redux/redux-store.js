import coursesReducer from "./redusers/courses-reducer";
import lessonBlockReducer from "./redusers/lessonblock-reducer";
import searchReducer from "./redusers/search-reducer";
import userReducer from "./redusers/user-reducer";


const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
  searchBar: searchReducer,
  courses: coursesReducer,
  lessonBlock: lessonBlockReducer,
  user: userReducer,
});

const store = createStore(reducers);

window.store = store

export default store;