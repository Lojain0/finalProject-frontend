import React, {useState,useEffect} from "react";
import axios from "axios";


export default function Posts({token}) {

//   const token=  JSON.parse(localStorage.getItem("token"))
// const [inputVal, setInputVal] = useState('')
const [Posts, setPosts] = useState([])
 
  const [ValueInput, SetValueInput] = useState('');


 
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/posts", {
      headers: {authorization: `Bearer ${token}`},
    });
    setPosts(res.data);
    
  }, []);


  const deletepost = async (id, index)=>{
    const deletepost = await axios.delete(`http://localhost:5000/posts/${id}`,{
      headers:{authorization: "Bearer " + token},
    });
    console.log((deletepost.data));
    if (deletepost.data === "deleted"){
      const copiedArr= [...Posts];
    copiedArr.splice(index,1);
    setPosts(copiedArr);
    }  
}

function setvalue(e) {
  let v = e.target.value;
  SetValueInput(v)
}
function search(e) {
    let newArr = Posts.filter((item)=>item.type ==ValueInput );
    setPosts(newArr)
}
  return (
    <>

    <div id="serch">
      <input  id="input" onChange={setvalue}type="text" className="se" placeholder="Search Here" />
        <button className="btn" onClick={search} >Search</button>
    </div>

        
    <div id="card" >

        {Posts.map((element, i) => {
          console.log(element);
          return (
            <div className="post" key={element._id}>
          
            {
                element.img &&   <img  src={element.img} className="card-img-top" alt="..."/>
            }
                        <p>{element.text}</p> 
            <button className="btn btn-primary" onClick={() => {deletepost(element._id, i); }}> حذف </button>
          <br/>  <br/>
            </div>
          );
        })}
      </div>
    </>
  );
}

