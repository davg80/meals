import { Navigate, Outlet } from "react-router-dom";
import Homepage from "../../pages/Homepage";

const useAuth = () => {
    const user = { loggedIn: false }
    return user && user.loggedIn;
}

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoute