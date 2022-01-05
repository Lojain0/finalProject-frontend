import React, { useState, useEffect } from "react";
import axios from "axios";
import "./posts.css";

export default function Posts({ token }) {
  const [Posts, setPosts] = useState([]);
  const [searchArr, setSearchArr] = useState([]);
  const [inputSearch, SetInputSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [upText, setUpText] = useState("");
  // const [like, setLike] = useState([]);

  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/posts", {
      headers: { authorization: `Bearer ${token.token}` },
    });
    setPosts(res.data);
    console.log(res.data, "ww");
  }, []);

  const deletepost = async (id, index) => {
    const deletepost = await axios.delete(`http://localhost:5000/posts/${id}`, {
      headers: { authorization: "Bearer " + token.token },
    });
    console.log(deletepost.data);
    const copiedArr = [...Posts];
    copiedArr.splice(index, 1);
    setPosts(copiedArr);
    setSearchArr(copiedArr);
    setToggle(false);
  };

  const updatePost = async (id) => {
    const update = await axios.put(
      `http://localhost:5000/posts/${id}`,
      {
        text: upText,
      },
      {
        headers: { authorization: "Bearer " + token.token },
      }
    );
    setPosts(update.data);
    setToggle(!toggle);
  };

  const updaetTextVal = (e) => {
    setUpText(e.target.value);
  };

  const ChangeToggel = () => {
    setToggle(!toggle);
  };

  function setvalue(e) {
    SetInputSearch(e.target.value);
    setSearchArr(Posts);
  }

  function search(e) {
    const search = Posts.filter((element) => {
      if (
        element.text.toLowerCase().includes(inputSearch.toLocaleLowerCase())
      ) {
        return element;
      }

      console.log(element);
    });
    setSearchArr(search);
  }

  const addLike = async (id) => {
    try {
      const result = await axios.post(
        `http://localhost:5000/Like/${id}`,
        {},
        {
          headers: { authorization: "Bearer " + token.token },
        }
      );
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="serch">
        <input
          id="input"
          onChange={setvalue}
          type="text"
          className="se"
          placeholder="Search Here"
        />
        <button className="btn" onClick={search}>
          Search
        </button>
      </div>

      <div id="card">
        {searchArr.length
          ? searchArr.map((element, i) => {
              return (
                <div id="onecard" key={element._id}>
                  <b> {element.user.name} ♡</b>
                  <br></br>
                  {element.img && (
                    <img src={element.img} className="card-img-top" alt="..." />
                  )}
                  <p>{element.text}</p>
                  {token.payload.admin ? (
                    ""
                  ) : (
                    <button
                      className="btnprimary"
                      onClick={() => {
                        addLike(element._id);
                      }}
                    >
                      {" "}
                      🖤{" "}
                    </button>
                  )}
                  {token.email == element.user.email ? (
                    token.payload.admin ? (
                      ""
                    ) : (
                      <div>
                        <button
                          className="btnprimary"
                          onClick={() => {
                            deletepost(element._id, i);
                          }}
                        >
                          {" "}
                          ❌{" "}
                        </button>
                        <button
                          className="btnprimary"
                          onClick={() => {
                            ChangeToggel();
                          }}
                        >
                          {" "}
                          📝{" "}
                        </button>
                        {toggle == true ? (
                          <div>
                            {" "}
                            <input
                              onChange={(e) => {
                                updaetTextVal(e);
                              }}
                              type="text"
                              placeholder=" Update text "
                            />
                            <button
                              className="btnprimary"
                              onClick={() => {
                                updatePost(element._id);
                              }}
                            >
                              {" "}
                              Update{" "}
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    )
                  ) : token.payload.admin ? (
                    <button
                      className="btnprimary"
                      onClick={() => {
                        deletepost(element._id, i);
                      }}
                    >
                      {" "}
                      ❌{" "}
                    </button>
                  ) : (
                    ""
                  )}
                  <br /> <br />
                </div>
              );
            })
          : Posts.map((element, i) => {
              console.log(element);
              return (
                <div id="onecard" key={element._id}>
                  <b> {element.user.name} ♡</b>
                  <br></br>
                  {element.img && (
                    <img src={element.img} className="card-img-top" alt="..." />
                  )}
                  <p>{element.text}</p>
                  {token.payload.admin ? (
                    ""
                  ) : (
                    <button
                      className="btnprimary"
                      onClick={() => {
                        addLike(element._id);
                      }}
                    >
                      {" "}
                      🖤{" "}
                    </button>
                  )}
                  {token.email == element.user.email ? (
                    token.payload.admin ? (
                      ""
                    ) : (
                      <div>
                        <button
                          className="btnprimary"
                          onClick={() => {
                            deletepost(element._id, i);
                          }}
                        >
                          {" "}
                          ❌{" "}
                        </button>
                        <button
                          className="btnprimary"
                          onClick={() => {
                            ChangeToggel();
                          }}
                        >
                          {" "}
                          📝{" "}
                        </button>
                        {toggle == true ? (
                          <div>
                            {" "}
                            <input
                              onChange={(e) => {
                                updaetTextVal(e);
                              }}
                              type="text"
                              placeholder=" Update text  "
                            />
                            <button
                              className="btnprimary"
                              onClick={() => {
                                updatePost(element._id);
                              }}
                            >
                              {" "}
                              Update{" "}
                            </button>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    )
                  ) : token.payload.admin ? (
                    <button
                      className="btnprimary"
                      onClick={() => {
                        deletepost(element._id, i);
                      }}
                    >
                      {" "}
                      ❌{" "}
                    </button>
                  ) : (
                    ""
                  )}
                  <br /> <br />
                </div>
              );
            })}
      </div>
    </>
  );
}
