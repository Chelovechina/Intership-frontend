import { connect } from "react-redux";
import Mentor from "./Mentor";

const mapStateToProps = (state) => {
  return {
    course: {
      id: 1,
      name: "Python",
      description: "Python — это высокоуровневый язык программирования общего назначения, который используется в том числе и для разработки веб-приложений. Язык ориентирован на повышение производительности разработчика и читаемости кода.",
      dates_of_event: "2022-04-06",
      mentor: "Александр Александрович",
      course_completion_rate: 60,
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const MentorContainer = connect(mapStateToProps, mapDispatchToProps)(Mentor);

export default MentorContainer;