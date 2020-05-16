import React from "react"
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaMediumM,
  FaYoutube
  
} from "react-icons/fa"

export default [
  {
    id: Math.random(),
    url: "https://github.com/fjkiani",
    image: <FaGithubSquare className="github-icon icon" />,
  },
  // {
  //   id: Math.random(),
  //   url: "https://www.instagram.com/fjkiani/",
  //   image: <FaInstagramSquare 
  //   target="_blank"
  //   className="instagram-icon icon" />,
  // },
  {
    id: Math.random(),
    url: "https://www.linkedin.com/in/fjkiani/",
    image: <FaLinkedinIn 
    className="linkedin-icon icon" />,
  },
  {
    id: Math.random(),
    url: "https://medium.com/@fjkiani1",
    image: <FaMediumM 
    className="medium-icon icon" />,
  },
  // {
  //   id: Math.random(),
  //   url: "#",
  //   image: <FaYoutube 
  //   className="youtube-icon icon" />,
  // },
]
