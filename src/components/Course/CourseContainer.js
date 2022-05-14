import Course from "./Course";
import { setCurrentCourseCreator } from "../../redux/redusers/courses-reducer";

const { connect } = require("react-redux");

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentCourse: (courseId) => {
      dispatch(setCurrentCourseCreator(courseId));
    }
  }
}

const CourseContainer = connect(mapStateToProps, mapDispatchToProps)(Course)

export default CourseContainer;