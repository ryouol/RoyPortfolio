// IframeEmbed.js
import React from 'react';

const IframeEmbed = ({ src, width, height, title }) => (
  <iframe
    src={src}
    width={250}
    height={170}
    frameBorder="0"
    allowFullScreen
    title={title}
  ></iframe>
);

export default IframeEmbed;
