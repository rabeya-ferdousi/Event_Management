import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <span class="loading loading-dots loading-lg flex justify-center justify-items-center"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;