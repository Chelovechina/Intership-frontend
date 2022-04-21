const initialState = [
  {
    id: 1,
    name: "Python",
    description: "Описание курса",
    dates_of_event: "2022-04-06",
    mentor: "John Malkovich",
    course_completion_rate: 60,
    subthemes_id: null,
    lessons_block_id: null,
    lessons_list_id: null,
    hometasks_list_id: null
  },
  {
    id: 2,
    name: "C#",
    description: "Описание курса",
    dates_of_event: "2022-04-06",
    mentor: "John Malkovich",
    course_completion_rate: 40,
    subthemes_id: null,
    lessons_block_id: null,
    lessons_list_id: null,
    hometasks_list_id: null
  }
]

const coursesReducer = (state = initialState) => {
  return state
}

export default coursesReducer;