import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./routes/MainLayout";
import { Home } from "./routes/Home";
import { Cadastro } from "./routes/Cadastro";
import { Login } from "./routes/Login";
import { ToastsProvider } from "./context/useToast";
import { Produto } from "./routes/Produto";
import { Reserva } from "./routes/Reserva";
import { AuthProvider } from "./context/useAuth";
import { UserGuard } from "./guards/UserGuard/UserGuard";
import { ConfirmacaoReserva } from "./routes/ConfirmacaoReserva";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastsProvider>
          <Routes>
            <Route path="" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              {/* <Route path="/produto/:id" element={<Detail />} /> */}
              <Route path="/produto" element={<Produto />} />
              <Route path="/reserva" element={<Reserva />} />
              <Route path="" element={<UserGuard />}>
                <Route path="/sucesso" element={<ConfirmacaoReserva />} />
              </Route>
            </Route>
          </Routes>
        </ToastsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
