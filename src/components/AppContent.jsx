import React from "react";
import "../appcontent.css";
import { Link } from "react-router-dom";

const AppContent = () => {
  return (
    <div className="app-content">
      <h1> Welcome to my React Router Assignment Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        delectus dolorem, facere laborum dolorum iure!{" "}
      </p>
      <div className="card-section">
        <div className="app-card">
          <Link to="/title" className="title">
            Title
          </Link>
          <Link to="/comments" className="comments">
            Total Comments
          </Link>
        </div>
        <div className="app-card">
          <Link to="/posts" className="posts">
            Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppContent;
