
import React from "react"

const SignUpForm = () => {

   return (

        <div>
                <form action="/" class="form-signin" method="POST">
                   <h1>Get in touch with Fahad  </h1>
                   <p>Do you need help bringing some ideas to life? If so, I would love to help. </p>
                   <div class="info">
                   <input type="text" name="fName" placeholder="Your Name" />
                   <input type="email" email ="email" placeholder="Your Email" />
                       </div>
                    <input type="submit" value="Submit" />
               </form>    
                   
               </div>
   )
}


export default SignUpForm