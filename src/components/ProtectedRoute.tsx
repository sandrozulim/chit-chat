import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: React.ReactNode;
  redirectPath: string;
};

function ProtectedRoute({ children, redirectPath }: ProtectedRouteProps) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate(redirectPath, { replace: true });
    }
  }, [currentUser, navigate, redirectPath]);

  return children;
}

export default ProtectedRoute;
