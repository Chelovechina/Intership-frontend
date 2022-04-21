const initialState = {
  id: 1,
  name: "Python",
  description: "Python — это высокоуровневый язык программирования общего назначения, который используется в том числе и для разработки веб-приложений. Язык ориентирован на повышение производительности разработчика и читаемости кода.",
  dates_of_event: "2022-04-06",
  mentor: "John Malkovich",
  course_completion_rate: 60,
  subthemes_id: null,
  lessons_block_id: null,
  lessons_list_id: null,
  hometasks_list_id: null
}

const courseReducer = (state = initialState) => {
  return state
}

export default courseReducer;