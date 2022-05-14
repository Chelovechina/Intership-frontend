import { connect } from "react-redux";
import { addLessonCreator } from "../../redux/redusers/lessonblock-reducer";
import AddLesson from "./AddLesson";

const mapStateToProps = (state) =>  {
  return {
    lessonBlocks: state.lessonBlock.lessonBlocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLesson: (lesson) => {
      dispatch(addLessonCreator(lesson))
    }
  }
}

const AddLessonContainer = connect(mapStateToProps, mapDispatchToProps)(AddLesson)

export default AddLessonContainer;