import React, { useState, useEffect } from "react";
import axios from "axios";
import "./like.css";

export default function Likes({ token }) {
  const [like, setLike] = useState([]);

  useEffect(async () => {
    if (token) {
      const res = await axios.get("http://localhost:5000/Like", {
        headers: { authorization: "Bearer " + token.token },
      });
      console.log(res.data);
      setLike(res.data);
    }
  }, []);
  const deleteLike = async (id, i) => {
    const res = await axios.delete(`http://localhost:5000/Like/${id}`, {
      headers: { authorization: "Bearer " + token.token },
    });
    const coppyDelete = [...like];
    coppyDelete.splice(i, 1);
    setLike(coppyDelete);
  };
  return (
    <div id="cardd">
      {like.map((element, i) => {
        console.log(element);
        return (
          <div id="onecardd">
            <div key={i}>
              <p>{element.name}</p>
              <img src={element.img} alr="No Img" />
            </div>
            <br />
            <button
              id="btnu"
              onClick={() => {
                deleteLike(element._id, i);
              }}
            >
              ❤️
            </button>
          </div>
        );
      })}
    </div>
  );
}
