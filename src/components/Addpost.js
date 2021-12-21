
import React ,{useState} from 'react'
import axios from 'axios'

export default function AddPost(props) {
   
    const [img, setImg] = useState("")
    const [text, setText] = useState("")
    const {token ,setPost} = props
 
          const changeImgVal = (e) => {
            setImg(e.target.value);
          };
  

    const changeTextVal=(e) =>{
        setText(e.target.value);
    
    }

    const addPost=async ()=>{
        const result = await axios.post(
          "http://localhost:5000/posts",
          {
            newImg: img,
            newtext:text,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
        setImg("")
        setText("")
      }

      


    return (
        <div>
            <div>

</div>

<div class="container">
        <div id="form" class="form">
            <h2>AddPost</h2>
            <div class="form-control">
                <label for="img"> Add Img </label>
                <input onChange={(e) => { changeImgVal(e); }}  value={img}  type="text" id="text" placeholder=" Add Img  " />{" "}
            </div>
            <div class="form-control">
                <label for="text"> text</label>
                <input onChange={(e) => {    changeTextVal(e);  }} value={text} type="text" id="text" placeholder="Add Text" />
            </div>
           

            <button onClick={() => {addPost();  }}type="submit"> Add Post </button>

        </div>
    </div>
        </div>
    )
}
