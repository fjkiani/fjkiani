import { Link } from "gatsby"
import React from "react"

const SignUpForm = () => {

   return (

        <div>
                <form action="/" class="form-signin" method="POST">
                   <h1>Newsletter Signup</h1>
                   <p>Signup to get a "track of the week" delivered straight to your mail box weekly.</p>
                   <div class="info">
                   <input type="text" name="fName" placeholder="Your Name" />
                   <input type="email" email ="email" placeholder="Your Email" />
                       </div>
                    <input type="submit" value="Subscribe" />
               </form>    
                   
               </div>
   )
}


export default SignUpForm