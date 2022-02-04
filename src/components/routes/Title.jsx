import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../Usefetch";
import "../../title.css";

const Title = () => {
  const [titleData, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div className="section-title">
      <h1 className="top-title">Titles</h1>
      {loading && <h2 className="loading">Data is Loading....</h2>}

      <div className="title-section">
        {titleData &&
          titleData.map((data) => (
            <Link
              className="title-block"
              key={data.id}
              to={`/title/${data.id}`}
            >
              <h2> Title: {data.title}</h2>
            </Link>
          ))}
      </div>
      <h2 className="error-title"> {error}</h2>
    </div>
  );
};

export default Title;
