import React from 'react'
import Content from './Content'
import {graphql, useStaticQuery, Link} from 'gatsby'
import styles from '../../styles/content.css'
import Title from "./Title"
import Button from 'react-bootstrap/Button'




//export the query from graphql


const query = graphql `{
    allStrapiContents(sort: {fields: published, order: DESC} limit: 3) {
      nodes {
        url
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        id
      }
    }
  }
  `


function LatestWork () {
    // pass the query
    //get the nodes, rename them content and assign value to allStrapiContent
    const data = useStaticQuery(query)
    const filteredData = data.allStrapiContents.nodes
    // console.log(filteredData)

   
    
    return (
        <section className="items">
        <Title title="Latest Projects"></Title>
        <div className="center">
        {
        filteredData.map(item => {
            return <Content key={item.id} {...item}></Content> 
        })
    } 
        </div>
     

        <Link to="/work" className="btn"> All Work </Link>
        <hr></hr>
        </section>
    )
}

export default LatestWork
