import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { categoriesReducer, ideasReducer } from "./reducers";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      ideas: ideasReducer,
      categories: categoriesReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
