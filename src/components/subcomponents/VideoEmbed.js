import React from 'react'

const YoutubeEmbed = ({ embedURL }) => (
  <div className="video-responsive">
    <iframe
      width='100%'
      height='315px'
      src={embedURL}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)


export default YoutubeEmbed