import Course from "./Course";
const { connect } = require("react-redux");

const mapStateToProps = (state) => {
  return {
    course: state.course
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const CourseContainer = connect(mapStateToProps, mapDispatchToProps)(Course)

export default CourseContainer;