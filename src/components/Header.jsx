import React from "react";
import { Link } from "react-router-dom";
import "../header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        {" "}
        <Link to="/" className="logo">
          {" "}
          My Stutern Blog
        </Link>
      </h1>
      <nav>
        <Link to="/title" className="title">
          Title
        </Link>
        <Link to="/comments" className="comments">
          Comments
        </Link>
        <Link to="/posts" className="posts">
          Posts
        </Link>
      </nav>
    </div>
  );
};

export default Header;
