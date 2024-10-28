import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
// import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

    return isLoggedIn ? children : <Navigate to="/login" />;
    // return isLoggedIn ? children : <Login />;
};
console.log(PrivateRoute);

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
