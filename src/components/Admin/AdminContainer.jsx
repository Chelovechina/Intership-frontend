import { connect } from "react-redux";
import Admin from "./Admin";

const mapStateToProps = (state) => {
  return {
    lessons: state.lessons
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin)

export default AdminContainer;