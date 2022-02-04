import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./components/routes/Comments";
import Title from "./components/routes/Title";
import AppContent from "./components/AppContent";
import Posts from "./components/routes/Posts";
import Post from "./components/routes/Post";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AppContent />} />
          <Route path="title" element={<Title />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<Post />} />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
