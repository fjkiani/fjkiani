
import React from "react"

const SignUpForm = () => {

   return (

        <div>
                <form action="https://formspree.io/xlepldpp" method="POST" class="form-signin">
                   <h1>Get in touch with Fahad  </h1>
                   <div class="info">
                   <input type="text" name="fName" placeholder="Your Name" />
                   <input type="email" email ="email" name="email" placeholder="Your Email" />
                   <input type="message" email ="email" name="message" placeholder="How can I help you?" />
                       </div>
                    <input type="submit" value="Submit" />
               </form>    
                   
               </div>
   )
}


export default SignUpForm