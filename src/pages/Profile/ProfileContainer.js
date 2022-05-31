import { connect } from "react-redux";
import Profile from "./Profile";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer;