import { SET_CATEGORIES, SET_IDEAS, ADD_IDEAS } from "./constants";

export const setIdeas = (ideas) => {
  return { type: SET_IDEAS, value: ideas };
};

export const addIdea = (idea) => {
  return {
    type: ADD_IDEAS,
    value: idea
  };
};

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  value: categories,
});

export const fetchData = async (uri) => {
  try {
    const response = await fetch(
      `https://innovation-hub-apis.herokuapp.com/${uri}`
    );
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

export const postIdea = async (dispatch, data, onSuccessCallback) => {
  try {
    await fetch('https://innovation-hub-apis.herokuapp.com/ideas', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }).then((response) => {
      if (response.status === 200) {
        dispatch(addIdea(data));
        onSuccessCallback && onSuccessCallback();
      }
      return response;
    });
  } catch (error) {
    return { error };
  }
};

export const startDataFetch = (dispatch) => {
  fetchIdeas(dispatch);
  fetchCategories(dispatch);
};
