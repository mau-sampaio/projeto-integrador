import { Login } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./routes/MainLayout";
import { Home } from "./routes/Home";
import { Cadastro } from "./routes/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
