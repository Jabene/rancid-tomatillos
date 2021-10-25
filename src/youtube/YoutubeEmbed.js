import React from "react";
import './YoutubeEmbed.css'
function YoutubeEmbed({ movieKeyData }) {
  return (
  <div className="video-responsive">
    <iframe
      src={`https://www.youtube.com/embed/${movieKeyData.movieKey.key}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
    />
  </div>
);
}
export default YoutubeEmbed;
