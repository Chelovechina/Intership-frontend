import { connect } from "react-redux";
import CourseLessons from "./CourseLessons";

const mapStateToProps = (state) => {
  return {
    lessons: state.lessons
  }
}

const CourseLessonsContainer = connect(mapStateToProps)(CourseLessons)

export default CourseLessonsContainer;