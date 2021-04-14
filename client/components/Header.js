import React from "react";
import Link from "next/link";

const Header = ({ currentUser }) => {
  return (
    <nav className="navbar navbar-light bg-light">
          <Link href="/">
              <a  className="navbar-brand">GetTip</a>
          </Link>

          <div className="d-flex justify-content-end">
              <ul className="nav d-flex align-items-center">
                  {currentUser ? 'SignOut' : 'Sign In/Up'}
              </ul>
          </div>
    </nav>
  );
};

export default Header;
