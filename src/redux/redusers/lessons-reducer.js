const DETERMINE_PAGES = "DETERMINE_PAGES";

const initialState = [
  {
    id: 1,
    name: "Синтаксис"
  },
  {
    id: 2,
    name: "Типы данных"
  },
  {
    id: 3,
    name: "Int"
  },
  {
    id: 4,
    name: "String"
  },
  {
    id: 5,
    name: "Boolean"
  },
  {
    id: 6,
    name: "Float"
  },
  {
    id: 7,
    name: "Словари 1"
  },
  {
    id: 8,
    name: "Словари 2"
  },
  {
    id: 9,
    name: "Словари 3"
  },
  {
    id: 10,
    name: "Списки 1"
  },
  {
    id: 11,
    name: "Списки 2"
  },
  {
    id: 12,
    name: "Списки 3"
  },
  {
    id: 13,
    name: "Списки 4"
  }
]

const lessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETERMINE_PAGES:
      return {
        ...state,
      }
  
    default:
      return state
  }
}

export const determinePages = (lessonsPerPage) => {

  
  return {
    type: DETERMINE_PAGES,
    lessonsPerPage: lessonsPerPage
  }
}

export default lessonsReducer;