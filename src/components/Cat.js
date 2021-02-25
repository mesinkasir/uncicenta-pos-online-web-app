import React, { useEffect, useState } from "react";
import axios from "axios";
const User = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("localhost://connection/conn.php");
      setPosts(res.data.slice(0, 5));
    })();
  }, []);

  const listMarkup =
    posts.length > 0 ? (
      posts.map(post => (
        <div className="col-6 col-md-3 p-3 p-md-5">
          <div
            className="p-3 p-md-5 text-center bg-info text-white rounded border border-white"
            key={post.id}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="46"
              fill="currentColor"
              className="bi bi-box-seam"
              viewBox="0 0 16 16"
            >
              <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
            </svg>
            <h5 className="card-title">{post.name}</h5>
            <p>{post.texttip}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center">Wait... Load API Database</div>
    );
  return (
    <div className="row">
      <div className="col-12 col-md-12 p-3">
        <h3 className="text-center">Categories</h3>
      </div>
      <div className="col-12 col-md-12">
        <div className="row">{listMarkup}</div>{" "}
      </div>
    </div>
  );
};

export default User;
