import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
