import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/home" />;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
};

export default PublicRoute;
