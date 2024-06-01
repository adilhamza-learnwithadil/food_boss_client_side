import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} replace to='/login'></Navigate>;
};

export default PrivetRoute;