import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./routes/MainLayout";
import { Home } from "./routes/Home";
import { Cadastro } from "./routes/Cadastro";
import { Login } from "./routes/Login";
import { ToastsProvider } from "./context/useToast";
import { Produto } from "./routes/Produto";

function App() {
  return (
    <BrowserRouter>
      <ToastsProvider>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            {/* <Route path="/produto/:id" element={<Detail />} /> */}
            <Route path="/produto" element={<Produto />} />
          </Route>
        </Routes>
      </ToastsProvider>
    </BrowserRouter>
  );
}

export default App;
