import React, { useEffect, useState } from "react";
import axios from "axios";
const Slup = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("localhost://connection/pp.php");
      setPosts(res.data.slice(0, 5));
    })();
  }, []);

  const listMarkup =
    posts.length > 0 ? (
      posts.map(post => (
        <div className="col-12 col-md-4 p-3 p-md-5">
          <div
            className="p-3 p-md-5 text-center bg-info text-white rounded border border-white"
            key={post.id}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              className="bi bi-clipboard-data"
              viewBox="0 0 16 16"
            >
              <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
            <p>Payment : {post.payment}</p>
            <p>Tendered : {post.tendered}</p>
            <p>Total : {post.total}</p>
            <p>{post.notes}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center">Wait... Load API Database</div>
    );
  return (
    <div className="row">
      <div className="col-12 col-md-12 p-3">
        <h3 className="text-center">Income Report</h3>
      </div>
      <div className="col-12 col-md-12">
        <div className="row">{listMarkup}</div>{" "}
      </div>
    </div>
  );
};

export default Slup;
