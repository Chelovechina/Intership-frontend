import { connect } from "react-redux";
import { setCurrentCourseCreator } from "../../../redux/redusers/courses-reducer";
import HeaderNav from "./HeaderNav";

const mapStateToProps = (state) => {
  return {
    courses: state.courses.courses
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentCourse: (courseId) => {
      dispatch(setCurrentCourseCreator(courseId));
    }
  };
}

const HeaderNavContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderNav);

export default HeaderNavContainer;