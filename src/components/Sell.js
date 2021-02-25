import React, { useEffect, useState } from "react";
import axios from "axios";
const Sell = () => {
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
              className="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <p>{post.name}</p>
            <p>Ref : {post.reference}</p>
            <p>Barcode : {post.code}</p>
            <p>Price : {post.pricesell}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center">Wait... Load API Database</div>
    );
  return (
    <div className="row">
      <div className="col-12 col-md-12 p-3">
        <h3 className="text-center">Price List</h3>
      </div>
      <div className="col-12 col-md-12">
        <div className="row">{listMarkup}</div>{" "}
      </div>
    </div>
  );
};

export default Sell;
