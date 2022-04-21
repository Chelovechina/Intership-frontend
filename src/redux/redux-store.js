import courseReducer from "./redusers/course-reducer";
import coursesReducer from "./redusers/courses-reducer";
import lessonsReducer from "./redusers/lessons-reducer";
import searchReducer from "./redusers/search-reducer";

const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
  searchBar: searchReducer,
  courses: coursesReducer,
  course: courseReducer,
  lessons: lessonsReducer,
});

const store = createStore(reducers);

export default store;