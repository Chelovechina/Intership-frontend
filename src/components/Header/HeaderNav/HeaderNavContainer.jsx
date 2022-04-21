import { connect } from "react-redux";
import HeaderNav from "./HeaderNav";

const mapStateToProps = (state) => {
  return {
    courses: state.courses
  }
}

const HeaderNavContainer = connect(mapStateToProps)(HeaderNav);

export default HeaderNavContainer;