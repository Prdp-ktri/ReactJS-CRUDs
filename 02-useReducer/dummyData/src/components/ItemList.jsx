export default function ItemList({ items, onEdit, onDelete }) {
  return (
    <div className="list">
      {items.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.name}</h3>
          <p>{item.role}</p>
          <div>
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
