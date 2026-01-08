import { Navigate, useLocation } from "react-router-dom";

const PublicRouteAccess = ({ children }) => {
    const accessToken = window.localStorage.getItem("accessToken");
    const refreshToken = window.localStorage.getItem("refreshToken");
    const location = useLocation();

    if (accessToken || refreshToken) {
        return <Navigate to={location.state?.from?.pathname || "/dashboard"} state={{ from: location }} replace />;
    }

    return (
        <>
            {children}
        </>
    );
};

export default PublicRouteAccess;