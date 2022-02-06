import React from 'react'

const YoutubeEmbed = ({ embedURL }) => (
  <div className="video-responsive">
    <iframe
      width="420"
      height="315"
      src={embedURL}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)


export default YoutubeEmbed