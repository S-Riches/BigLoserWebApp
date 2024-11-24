type reducerAction = {
  type: string;
  payload: any;
};
type reducerState = {
  items: string[];
};

export const taskCardReducer = (state: reducerState, action: reducerAction) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      items: state.items.filter((item) => item !== action.payload),
    };
  }
  return state;
};
