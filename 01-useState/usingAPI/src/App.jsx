import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Note: In a real Vite app, the file extensions might be different (.jsx vs .js)
// depending on how you structure your files. Adjust imports if necessary.
import Add from "./Add.jsx";
import Display from "./Display.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Links */}
      <nav style={{ padding: "10px 20px", borderBottom: "1px solid #ccc" }}>
        <Link to="/add" style={{ marginRight: "15px" }}>
          Add User
        </Link>
        <Link to="/display">Display Users</Link>
      </nav>

      {/* Routes Definition */}
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/display" element={<Display />} />
          {/* Optional: Add a default route */}
          <Route path="/" element={<Display />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
