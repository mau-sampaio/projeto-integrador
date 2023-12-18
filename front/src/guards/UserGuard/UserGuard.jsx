import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useEffect } from "react";

export function UserGuard() {
  const { loggedUser, ready } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedUser && ready) {
      navigate("/login");
    }
  }, [loggedUser, ready]);

  if (!loggedUser) {
    return <></>;
  }
  return <Outlet />;
}
