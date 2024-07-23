import React from "react";

function Avatar({ src, alt, size }) {
  const avatarSize = size || 100;
  let content;
  if (src) {
    content = <img src={src} alt={alt} className="avatar" />;
  }

  return (
    <div
      className="avatar-container"
      style={{ width: `${avatarSize}px`, height: `${avatarSize}px` }}
    >
      {content}
    </div>
  );
}

export default Avatar;
