import React from "react"
import Layout from "../components/layout"
import MyWork from "../components/myWork"
import Header from "../components/header"
import Contents from "../components/contentComponents/Contents"
import MyWorkBanner from "../components/MyWorkBanner"



const Courses = () => {
  return (
    <Layout>
    <Header/>
    <MyWork/>
    <Contents/>
    <MyWorkBanner/>
 
    </Layout>
  )
}

export default Courses