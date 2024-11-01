import { Link } from "react-router-dom";

import "./notFound.scss";
import notFound from "../assets/img/notFound.jpg";

function NotFound() {
  return (
    <div className="notFound">
      <img src={notFound} alt="Not Found" className="nfImg" />
      <h2 className="nfText">Sorry! Something went wrong.</h2>
      <Link to="/" className="nfLink">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
