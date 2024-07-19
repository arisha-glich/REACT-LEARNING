import React from "react";

function Avatar({ src, alt, size }) {
  const avatarSize = size || 200; // Default size is 100px if not provided
  return (
    <div
      className="avatar-container"
      style={{ width: `${avatarSize}px`, height: `${avatarSize}px` }}
    >
      {src ? (
        <img src={src} alt={alt} className="avatar" />
      ) : (
        <div className="avatar-placeholder">{alt.charAt(0).toUpperCase()}</div>
      )}
    </div>
  );
}

export default Avatar;
