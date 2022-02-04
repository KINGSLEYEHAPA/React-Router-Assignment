import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../Usefetch";
import "../../post.css";

const Post = () => {
  let params = useParams();

  const [posts, loading, error] = useFetch(
    `https://jsonplaceholder.typicode.com/posts`
  );
  console.log(posts);

  function getPost(number) {
    return posts && posts.find((post) => post.id === number);
  }

  let onePost = getPost(parseInt(params.postId, 10));

  return (
    <div className="onepost">
      {loading && <h2 className="loading">Post is Loading...</h2>}
      {posts && (
        <div className="onepost-card">
          <h3>Title: {onePost.title}</h3>
          <p>Comment: {onePost.body}</p>
          <p> UserId: {onePost.userId}</p>
          <Link to="/comments" className="all-comment">
            Go to all comments
          </Link>
        </div>
      )}

      <h3 className="error-title">{error}</h3>
    </div>
  );
};

export default Post;
