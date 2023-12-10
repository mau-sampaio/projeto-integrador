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
import { ListaReservas } from "./routes/ListaReservas";
import { Perfil } from "./routes/Perfil";
import { Confirmation } from "./components/Confirmation/Confirmation";
import { CriacaoProduto } from "./routes/CriacaoProduto";
import { ListaProdutos } from "./routes/ListaProdutos";

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
              <Route
                path="/cadastro/sucesso"
                element={
                  <Confirmation text="Cadastro realizado com sucesso!" />
                }
              />
              {/* <Route path="/produto/:id" element={<Detail />} /> */}
              <Route path="/produto" element={<Produto />} />
              <Route path="/reserva" element={<Reserva />} />
              <Route path="" element={<UserGuard />}>
                <Route
                  path="/reserva/sucesso"
                  element={<Confirmation title="Muito Obrigado!" />}
                />
                <Route path="/minhas-reservas" element={<ListaReservas />} />
                <Route path="/meus-produtos" element={<ListaProdutos />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/criacao-produto" element={<CriacaoProduto />} />
                <Route
                  path="/criacao-produto/sucesso"
                  element={
                    <Confirmation
                      text="Sua propriedade foi criada com sucesso."
                      btn="Voltar"
                    />
                  }
                />
              </Route>
            </Route>
          </Routes>
        </ToastsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
