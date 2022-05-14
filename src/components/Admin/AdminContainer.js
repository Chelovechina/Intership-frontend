import { connect } from "react-redux";
import Admin from "./Admin";

const mapStateToProps = (state) => {
  return {
    lessonBlock: state.lessonBlock
  } 
}

const AdminContainer = connect(mapStateToProps)(Admin)

export default AdminContainer;