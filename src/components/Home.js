import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"


export default function Navbar() {
    return (
     <div>
         <section class="curved">

         <section id="main">
                  
                  <div className="main-row">
                      <div >
                      </div>
                      <div className="text">
                          <h1>Tumblr</h1>
                          <h5>في تمبلر لن يقيمك الناس اعتماداً على عدد متابعينك أو أي أرقام أٌخرى , بل على مستوى ثقافتك و ماتقدمه من محتوى فقط , في تمبلر لن يشتمك أحد لأن أفكارك وثقافتك مختلفه عنه , عندما تدخل تمبلر ستشعر و كأنك دخلت إلى معرض فنّي , فإن أعجبتك لوحة شكرت صاحبها , و إن لم تعجبك لوحة ما فـ لن تلقي لها بالاً , وسوف تبتسم في وجه فنّانها ثم تمضي بلا نقاش</h5>
                          
                          <h4>فـ اهلاً في مساحتك الخاصة</h4>
                        
                          <Link className=".btn" to={"/SignUp"} className="btn">
                             للتسجيل
                          </Link>
                          </div>
                          <br/> <br/>  <br/>    

{/*                                    
                      <img className="img" src="" alt="..."/>
                      <img className="img" src="" alt="..."/>
                      <img className="img"  src="" alt="..."/> */}

                  </div>
                  
          </section>
         </section>
           

</div>

    )
}
