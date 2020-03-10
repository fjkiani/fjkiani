import React from "react"
import '../styles/styles.scss'
import Header from "../components/header"
// import Banner from "../components/banner"
import MyWork from "../components/myWork";
import MyWorkBanner from "../components/myWorkBanner";
import MyWorkBanner2 from "../components/myWorkBanner2";
import MyWorkBanner3 from "../components/myWorkBanner3";

const Work = () => (
    <div>
      <Header />
      <MyWork/>
      <MyWorkBanner />
      <MyWorkBanner2 />
      <MyWorkBanner3 />
  
    </div>
    
  )
  
  export default Work