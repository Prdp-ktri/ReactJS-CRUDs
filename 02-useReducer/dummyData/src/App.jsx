import { useReducer, useState } from "react";
import { reducer, initialState } from "./Reducer";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingItem, setEditingItem] = useState(null);

  const handleSave = (item) => {
    if (item.id) {
      dispatch({ type: "UPDATE_ITEM", payload: item });
      setEditingItem(null);
    } else {
      dispatch({ type: "ADD_ITEM", payload: item });
    }
  };

  const handleEdit = (item) => setEditingItem(item);

  const handleDelete = (id) => dispatch({ type: "DELETE_ITEM", payload: id });

  return (
    <div className="App">
      <h1>React CRUD with useReducer</h1>
      <ItemForm onSave={handleSave} editingItem={editingItem} />
      <ItemList items={state} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
