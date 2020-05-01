import React from 'react'
import DjkContent from './DjkContent'
import {graphql, useStaticQuery} from 'gatsby'
import styles from '../contentComponents/contents.css'
import Title from "../contentComponents/Title"


const query = graphql `{
    allStrapiCourses {
          nodes {
            url
            title
            info
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
function DjkContents() {
    // pass the query
    //get the nodes, rename them content and assign value to allStrapiContent
    const data = useStaticQuery(query)
    const filteredData = data.allStrapiCourses.nodes
    // console.log(filteredData)

   
    
    return (
        <section className="items courses">
        <Title title="All of my Projects"></Title>

        <div className="center">
        {
        filteredData.map(item => {
            return <DjkContent key={item.id} {...item}></DjkContent> 
        })
    } 
        </div>

        </section>
    )
}

export default DjkContents
