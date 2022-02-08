import { SET_CATEGORIES, SET_IDEAS } from "./constants";

export const setIdeas = (ideas) => {
  return { type: SET_IDEAS, value: ideas };
};

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  value: categories,
});

export const fetchData = async (uri) => {
  try {
    const response = await fetch(`http://localhost:8080/${uri}`);
    const data = await response.json();
    return { data };
  } catch (error) {
    return { error };
  }
};

export const fetchIdeas = async (dispatch) => {
  const { data, error } = await fetchData("ideas");
  if (error) {
    dispatch(setIdeas([]));
  } else {
    dispatch(setIdeas(data));
  }
};

export const fetchCategories = async (dispatch) => {
  const { data, error } = await fetchData("categories");

  if (error) {
    dispatch(setCategories([]));
  } else {
    dispatch(setCategories(data));
  }
};

export const startDataFetch = (dispatch) => {
  fetchIdeas(dispatch);
  fetchCategories(dispatch);
};
