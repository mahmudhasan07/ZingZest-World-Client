import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import { Navigate, useNavigate } from "react-router-dom";
import userLoader from "../../../public/userloading.json"
import Lottie from "lottie-react";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context)


    if (loading) {
        return <Lottie animationData={userLoader} className="w-96 my-12 mx-auto"></Lottie>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to={'/login'}></Navigate>
    }
};

export default PrivateRoute;