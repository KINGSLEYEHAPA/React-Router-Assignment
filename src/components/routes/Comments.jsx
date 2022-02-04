import React from "react";
import { Link } from "react-router-dom";
import "../../comments.css";
import Usefetch from "../../Usefetch";

const Comments = () => {
  const [commentData, loading, error] = Usefetch(
    "https://jsonplaceholder.typicode.com/comments"
  );

  return (
    <div className="section-comments">
      <h1 className="comments-title">
        Comments {commentData && <span>({commentData.length})</span>}
      </h1>
      {loading && <h2 className="loading">Comment is loading....</h2>}

      <div className="comment">
        {commentData &&
          commentData.map((data) => (
            <Link
              className="comments-block"
              key={data.id}
              to={`/comments/${data.id}`}
            >
              <h2> Name: {data.name}</h2>
              <h4>Comments: {data.body}</h4>
            </Link>
          ))}
      </div>
      <h2 className="error-title">{error}</h2>
    </div>
  );
};

export default Comments;
