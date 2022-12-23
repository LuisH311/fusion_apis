import React from "react";
import "../styles/queue.css";

export default function Queue({ tracks, setCurrentIndex }) {
  return (
    <div className="queue-container flex">
      <div className="queue flex">
        <b className="upNext">Up Next</b>
        <div className="queue-list">
          {tracks?.map((track, index) => (
            <div
              key={index + "key"}
              className="queue-item flex"
              onClick={() => setCurrentIndex(index)}
            >
              <b className="track-name">{track?.track?.name}</b>
              <b>0:30</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
