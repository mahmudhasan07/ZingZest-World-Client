import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context)


    if (loading) {
        <h1>loading</h1>
    }
    if (user) {
        return children
    }
    else {
    return  <Navigate to={'/login'}></Navigate>
    }
};

export default PrivateRoute;