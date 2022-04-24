const SET_CURRENT_BLOCK = "SET_CURRENT_BLOCK";
const LESSONS_FILTER = "LESSONS_FILTER";

const initialState = {
  currentBlock: null,
  filteredLessons: [],
  allLessonsAmount: 19,
  lessonBlocks: [
    {
      id: 1,
      title: "Подготовка",
      lessons: [
        {
          id: 1,
          lessonsTitle: "Знакомство"
        },
        {
          id: 2,
          lessonsTitle: "Установка Python"
        },
        {
          id: 3,
          lessonsTitle: "Установка текстового редактора"
        },
        {
          id: 4,
          lessonsTitle: "Установка плагинов"
        }
      ]
    },
    {
      id: 2,
      title: "База 1",
      lessons: [
        {
          id: 5,
          lessonsTitle: "Типы данных"
        },
        {
          id: 6,
          lessonsTitle: "Строка 1"
        },
        {
          id: 7,
          lessonsTitle: "Строка 2"
        },
        {
          id: 8,
          lessonsTitle: "Конкатенация"
        },
        {
          id: 9,
          lessonsTitle: "Число 1"
        },
        {
          id: 10,
          lessonsTitle: "Число 2"
        },
        {
          id: 11,
          lessonsTitle: "Алгебраические операторы"
        }
      ]
    },
    {
      id: 3,
      title: "База 2",
      lessons: [
        {
          id: 12,
          lessonsTitle: "Список 1"
        },
        {
          id: 13,
          lessonsTitle: "Список 2"
        },
        {
          id: 14,
          lessonsTitle: "Список 3"
        },
        {
          id: 15,
          lessonsTitle: "Методы списка"
        },
        {
          id: 16,
          lessonsTitle: "Словарь 1"
        },
        {
          id: 17,
          lessonsTitle: "Словарь 2"
        },
        {
          id: 18,
          lessonsTitle: "Словарь 3"
        },
        {
          id: 19,
          lessonsTitle: "Методы словаря"
        }
      ]
    }
  ]
}

const lessonBlockReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_BLOCK:
      return {
        ...state,
        currentBlock: action.blockId
      }

    case LESSONS_FILTER: 
      const filteredLessons = []
      state.lessonBlocks.forEach(block => {
        block.lessons.filter(lesson => {
          if (lesson.lessonsTitle.toLowerCase().includes(action.searchText.toLowerCase())) {
            filteredLessons.push(lesson)
          } 
        })
      })

      return {
        ...state,
        filteredLessons: filteredLessons,
      }
      
    default: 
      return state;
  }  
}

export const setCurrentBlockCreator = (blockId) => ({
  type: SET_CURRENT_BLOCK,
  blockId: blockId,
})

export const lessonsFilterCreator = (searchText) => ({
  type: LESSONS_FILTER,
  searchText: searchText,
})

export default lessonBlockReducer;