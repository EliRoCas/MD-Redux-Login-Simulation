import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/loginSlice";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".navbar")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="headerContainer">
      <Link className="navbar-brand" to="/">
        <h1>Virtual Bar SC</h1>
      </Link>
      <nav className="navbar">
        <div className="toggleButton" onClick={toggleMenu}>
          <span className={isOpen ? "line open" : "line"}></span>
          <span className={isOpen ? "line open" : "line"}></span>
        </div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link className="link" to="/home" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="link"
              to="/results"
              onClick={() => setIsOpen(false)}
            >
              My Cocktails
            </Link>
          </li>
          <li>
            <Link className="link" to="/users" onClick={() => setIsOpen(false)}>
              My Class
            </Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link
                className="link"
                to="/register"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          )}

          {isLoggedIn ? (
            <li>
              <Link
                className="link"
                to="/"
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link
                className="link"
                to="/login"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// import { useState } from "react";
// import { Link } from "react-router-dom";

// import "./header.scss";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toogleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="headerContianer">
//       <Link className="navbar-brand" to="/home">
//         <h1>Virtual Bar SC </h1>
//       </Link>
//       <nav className="navbar">
//         <div className="toogleButton" onClick={toogleMenu}>
//           <span className={isMenuOpen ? "line open" : "line"}></span>
//           <span className={isMenuOpen ? "line open" : "line"}></span>
//         </div>
//         <ul>
//           <li>
//             <Link
//               to="/home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}  >
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/register" className="nav-link" onClick={() => setIsMenuOpen(false)}  >
//               Sign Up
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="results" className="nav-link" onClick={() => setIsMenuOpen(false)}  >
//               Cocktails
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/classmates"
//               className="nav-link" onClick={() => setIsMenuOpen(false)}>
//               My Classmates
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
