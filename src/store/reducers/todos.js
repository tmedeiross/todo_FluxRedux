const INITIAL_STATE = [
  { id: 1, text: "Todo 1" },
  { id: 2, text: "Todo 2" },
  { id: 3, text: "Todo 3" },
  { id: 4, text: "Todo 4" },
  { id: 5, text: "Todo 5" },
  { id: 6, text: "Todo 6" },
  { id: 7, text: "Todo 7" }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
