import React from "react"
import Title from "../Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import jobs from "../../styles/jobs.css"
import 'aos/dist/aos.css';



const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
      nodes {
        strapiId
        company
        date
        position
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = ({dat}) => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, description } = jobs[value]

  return (
    <section className="section jobs">
      {/* <Title title="Expierence" /> */}
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info" >
        <div className="fade-in" data-aos="fade-in"> 
          <h3>{position}</h3>
          <div className="company">
          <h4>{company}</h4>
          </div>
          <p className="job-date">{date}</p>
          {description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
          </div>
        </article>
      </div>
      {/* <Link to="/about" className="btn center-btn">
        more info
      </Link> */}
    </section>
  )
}

export default Jobs