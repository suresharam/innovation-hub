import { GET_IDEAS, SET_CATEGORIES, SET_IDEAS } from "./constants";

const initialCategoriesState = [];

export const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return [...action.value];
    }

    default: {
      return [...state];
    }
  }
};

const initialIdeasState = [];
export const ideasReducer = (state = initialIdeasState, action) => {
  switch (action.type) {
    case SET_IDEAS: {
      return [...action.value];
    }

    case GET_IDEAS: {
      return [...state.ideas];
    }

    default: {
      return [...state];
    }
  }
};
