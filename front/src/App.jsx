import { Login } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./routes/MainLayout";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
