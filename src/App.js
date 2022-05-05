import { NavLink, Route, Routes } from "react-router-dom";
import { Form } from "./pages/Form";
import { Products } from "./pages/Products";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Add Products</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Form />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
