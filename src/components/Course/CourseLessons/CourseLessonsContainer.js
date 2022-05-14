import { connect } from "react-redux";
import CourseLessons from "./CourseLessons";

const mapStateToProps = (state) => {
  return {
    lessonBlock: state.lessonBlock,
  };
}

const CourseLessonsContainer = connect(mapStateToProps)(CourseLessons)

export default CourseLessonsContainer;