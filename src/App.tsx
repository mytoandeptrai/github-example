import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import OrderPage from "./pages/OrderPage";
import ProductPage from "./pages/ProductPage";

function App() {
   return (
      <div>
         <Routes>
            <Route
               path="/"
               element={<DashboardPage />}
            />
            <Route
               path="/orders"
               element={<OrderPage />}
            />
            <Route
               path="/products"
               element={<ProductPage />}
            />
            <Route
               path="*"
               element={<h1>Page Not Found</h1>}
            />
         </Routes>
      </div>
   );
}

export default App;
