import { Routes, Route } from "react-router-dom";
import OrderList from "./Connects/OrderListConnected";
import ProductListConnected from "./Connects/ProductListConnected";

function App() {
  return (
    <div className="flex flex-col h-screen">
        <Routes>
          <Route index element={<OrderList />} />
          <Route path="/Order/Products/:cartNo" element={<ProductListConnected/>} />
        </Routes>
    </div>
  );
}

export default App;
