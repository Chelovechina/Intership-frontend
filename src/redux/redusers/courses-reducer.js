const SET_CURRENT_COURSE = "SET_CURRENT_COURSE";

const initialState = {
  currentCourse: null,
  courses: [
    {
      id: 1,
      name: "Python",
      description: "Python — это высокоуровневый язык программирования общего назначения, который используется в том числе и для разработки веб-приложений. Язык ориентирован на повышение производительности разработчика и читаемости кода.",
      dates_of_event: "2022-04-06",
      mentor: "Александр Александрович",
      course_completion_rate: 60,
    },
    {
      id: 2,
      name: "C#",
      description: "C# - это язык программирования, предназначенный для разработки самых разнообразных приложений, предназначенных для выполнения в среде . NET Framework. Язык C# прост, типобезопасен и объектно-ориентирован.",
      dates_of_event: "2022-04-08",
      mentor: "Сергей Сергеевич",
      course_completion_rate: 40,
    }
  ]
}

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_COURSE:
      return {
        ...state,
        currentCourse: action.courseId
      }
  
    default:
      return state
  }
}

export const setCurrentCourseCreator = (courseId) => ({
  type: SET_CURRENT_COURSE,
  courseId: courseId
})

export default coursesReducer;