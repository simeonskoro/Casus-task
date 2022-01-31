import { updateAppState, updateTemplateState } from "./store";
import store from "./store";

// implement API service wrapper here
export const getTemplates = () => {
  const { dispatch } = store;
  return fetch(
    "https://us-central1-casus-fe-task.cloudfunctions.net/templates",
    { method: "GET" }
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(updateTemplateState(data));
      return data;
    })
    .catch(() => dispatch(updateAppState("Failed to fetch")));
};
