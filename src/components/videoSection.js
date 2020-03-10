import React from "react"

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="container">
        <div className="video-player">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FU_njy0xy3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="video-content">
          <div className="title">
            <h3>Lets connect </h3>
          </div>
          <div className="content">
            <p>
              I’m so happy to present the 1st trailer of the film. “Let’s Talk
              About It Now” is a film that focuses on Mental health in the
              African community, and the black race as a whole, as this is a
              topic we tend to shy away from in our community . With this film,
              we hope to reduce/eradicate the stigma surrounding Mental Health
              In our community, making it a topic that is freely discussed as
              opposed to leaving it on the back burner.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
