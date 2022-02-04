import React from "react";
import { Link, Outlet } from "react-router-dom";
import useFetch from "../../Usefetch";
import "../../posts.css";

const Posts = () => {
  const [postData, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div className="allpost">
      <h2 className="top-posts">
        Posts Sections<span> ({postData && postData.length})</span>
      </h2>

      {loading && <h2 className="loading">Data is Loading....</h2>}

      <div className="posts-section">
        {postData &&
          postData.map((data) => (
            <Link
              className="posts-block"
              key={data.id}
              to={`/posts/${data.id}`}
            >
              <h2> Post: {data.title}</h2>
              <p>Body: {data.body}</p>
              <p>UserID: {data.userId}</p>
            </Link>
          ))}
      </div>

      <h2 className="error-title"> {error}</h2>
      <Outlet />
    </div>
  );
};

export default Posts;
