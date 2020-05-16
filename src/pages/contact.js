import React from "react"
import "../styles/emailListForm.scss"
import Header from "../components/header"
// import Banner from "../components/banner"
import SignUpForm from "../components/signUpComponents/signUpForm"
import SEO from '../components/seo'


const Contact = () => (
  <div>
    <SEO
      title="Contact"
      keywords={[`Contact Fahad`, `Fahad Kiani`, `Fahad`, `contact someone to build a website`, `contact a dj`, `React Developer`]}
    />
    <Header/>
    <SignUpForm />
  </div>
)

export default Contact
