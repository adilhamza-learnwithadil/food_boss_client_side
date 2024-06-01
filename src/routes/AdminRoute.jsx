import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={{from: location}} replace to='/'></Navigate>;
};

export default AdminRoute;