import { Navigate } from "react-router-dom";




const PrivateRoute = ({ children }) => {
    const userId = localStorage.getItem("userId");

    if (userId) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;