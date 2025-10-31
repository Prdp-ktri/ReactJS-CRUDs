export const initialState = [
  { id: 1, name: "Alice", role: "Developer" },
  { id: 2, name: "Bob", role: "Designer" },
];

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { id: Date.now(), ...action.payload }];

    case "UPDATE_ITEM":
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
}
