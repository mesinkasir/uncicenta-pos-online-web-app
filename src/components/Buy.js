import React, { useEffect, useState } from "react";
import axios from "axios";
const Buy = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("localhost://connection/bus.php");
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
              className="bi bi-upc-scan"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
            </svg>
            <p>{post.name}</p>
            <p>Ref : {post.reference}</p>
            <p>Barcode : {post.code}</p>
            <p>Price : {post.pricebuy}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center">Wait... Load API Database</div>
    );
  return (
    <div className="row">
      <div className="col-12 col-md-12 p-3">
        <h3 className="text-center">Cost Price Report</h3>
      </div>
      <div className="col-12 col-md-12">
        <div className="row">{listMarkup}</div>{" "}
      </div>
    </div>
  );
};

export default Buy;
