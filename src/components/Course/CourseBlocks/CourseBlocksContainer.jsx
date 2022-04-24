import { connect } from "react-redux";
import { setCurrentBlockCreator } from "../../../redux/redusers/lessonblock-reducer";
import Accordion from "../../Accordion/Accordion";

const mapStateToProps = (state) => {
  return {
    data: state.lessonBlock.lessonBlocks,
    accordionTitle: "Блоки занятий",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentBlock: (blockId) => {
      dispatch(setCurrentBlockCreator(blockId));
    }
  }
};

const CourseBlocksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Accordion);

export default CourseBlocksContainer;
