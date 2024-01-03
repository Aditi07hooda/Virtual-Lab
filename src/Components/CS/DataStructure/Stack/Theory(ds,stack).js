import React from "react";

export default function intro() {
  return (
    <div>
      <div className="video-responsive flex justify-center">
        <iframe
          width="753"
          height="380"
          src={"https://www.youtube.com/embed/toRJakeYIKA"}
          frameborder="0"         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}