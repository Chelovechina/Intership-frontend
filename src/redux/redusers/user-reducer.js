const initialState = {
  id: 1,
  fullName: "Александров Александр Александрович",
  courses: [
    {
      id: 1,
      title: "Python - разработчик"
    },
    {
      id: 3,
      title: "Графический дизайн"
    }
  ],
  description: [
    "Python - разработчик", 
    "5 лет комерческого работы",
    "Отличное знание Django"
  ]
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer;