import React, { useState, useEffect } from "react";
import axios from "axios";
import "./posts.css"


export default function Posts({ token }) {

    const [Posts, setPosts] = useState([])
    const [searchArr, setSearchArr] = useState([])
    const [inputSearch, SetInputSearch] = useState('');


    useEffect(async () => {
        const res = await axios.get("http://localhost:5000/posts", {
            headers: { authorization: `Bearer ${token}` },
        });
        setPosts(res.data);
        console.log(res.data, "ww");
        // setSearchArr(res.data)

    }, []);


    const deletepost = async (id, index) => {
        const deletepost = await axios.delete(`http://localhost:5000/posts/${id}`, {
            headers: { authorization: "Bearer " + token },
        });
        console.log((deletepost.data));
        if (deletepost.data === "deleted") {
            const copiedArr = [...Posts];
            copiedArr.splice(index, 1);
            setPosts(copiedArr);
            setSearchArr(copiedArr);

        }
    }

    function setvalue(e) {
        SetInputSearch(e.target.value)
        setSearchArr(Posts)
    }

    function search(e) {
        // setSearchArr(Posts)
        const search = Posts.filter((element) => {
            if (element.text.toLowerCase().includes(inputSearch.toLocaleLowerCase())) {
                return element;
            }
            console.log(element);
        });
        setSearchArr(search);
    }

    return (
        <>

            <div id="serch">
                <input id="input" onChange={setvalue} type="text" className="se" placeholder="Search Here" />
                <button className="btn" onClick={search} >Search</button>
            </div>


            <div id="card" >

                {searchArr.length ?
                    searchArr.map((element, i) => {
                        return (
                            <div id="onecard" key={element._id}>
                                <b>  {element.user.name} ♡</b>
                                <br></br>
                                {
                                    element.img && <img src={element.img} className="card-img-top" alt="..." />
                                }
                                <p>{element.text}</p>
                                <button className="btnprimary" onClick={() => { deletepost(element._id, i); }}> ❌ </button>
                                <button className="btnprimary"> ❤️ </button>
                                <button className="btnprimary"> 📝 </button>
                                <br /> <br />
                            </div>
                        )
                    })
                    :
                    Posts.map((element, i) => {
                        console.log(element);
                        return (
                            <div id="onecard" key={element._id}>
                                <b>  {element.user.name} ♡</b>
                                <br></br>
                                {
                                    element.img && <img src={element.img} className="card-img-top" alt="..." />
                                }
                                <p>{element.text}</p>

                                <button className="btnprimary" onClick={() => { deletepost(element._id, i); }}> ❌ </button>
                                <button className="btnprimary"> ❤️ </button>
                                <button className="btnprimary"> 📝 </button>
                                <br /> <br />
                            </div>
                        );
                    })}

            </div>
        </>
    );
}

