import React from 'react'
import AchievementContent from './Achievement'
import {graphql, useStaticQuery} from 'gatsby'
import styles from '../contentComponents/contents.css'
import Title from "../contentComponents/Title"
import Achievement from './Achievement';

const query = graphql `{
    allStrapiAchievements {
          nodes {
            url
            title
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

function Achievements () {
    // pass the query
    //get the nodes, rename them content and assign value to allStrapiContent
    const data = useStaticQuery(query)
    const filteredData = data.allStrapiAchievements.nodes
    // console.log(filteredData)

   
    
    return (
        <section className="items courses">
        <Title title="My Latest Achievements"></Title>

        <div className="center">
        {
        filteredData.map(item => {
            return <Achievement key={item.id} {...item}></Achievement> 
        })
    } 
        </div>

        </section>
    )
}

export default Achievements
