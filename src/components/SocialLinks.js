import React from "react"
import {
  FaGithubSquare,
  FaLinkedinIn,
  FaMediumM,
  // FaInstagramSquare,
  FaYoutube,
  
} from "react-icons/fa"

export default [
  {
    id: 1,
    url: "https://github.com/fjkiani",
    image: <FaGithubSquare className="github-icon icon" />,
  },

  {
    id: 2,
    url: "https://www.linkedin.com/in/fjkiani/",
    image: <FaLinkedinIn 
    className="linkedin-icon icon" />,
  },
  {
    id: 3,
    url: "https://medium.com/@fjkiani1",
    image: <FaMediumM 
    className="medium-icon icon" />,
  },
  // {
  //   id: 4,
  //   url: "https://www.instagram.com/fjkiani/",
  //   image: <FaInstagramSquare 
  //   target="_blank"
  //   className="instagram-icon icon" />,
  // },
  // {
  //   id: 5,
  //   url: "https://www.youtube.com/channel/UCBBGotUyECCYMx0UQtlyiHg",
  //   image: <FaYoutube 
  //   className="youtube-icon icon" />,
  // },
]
