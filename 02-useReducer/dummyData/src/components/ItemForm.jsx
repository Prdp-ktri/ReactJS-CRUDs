import { useState, useEffect } from "react";

export default function ItemForm({ onSave, editingItem }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.name);
      setRole(editingItem.role);
    } else {
      setName("");
      setRole("");
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !role.trim()) return;
    onSave({ name, role, id: editingItem?.id });
    setName("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button type="submit">{editingItem ? "Update" : "Add"}</button>
    </form>
  );
}
