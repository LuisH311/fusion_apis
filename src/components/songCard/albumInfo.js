import React from "react";
import "../styles/albumInfo.css";

export default function AlbumInfo({ album }) {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  return (
    <div className="albumInfo-card">
      <div className="albumName-container">
        <div className="marquee">
          <b>{album?.name + " - " + artists?.join(", ")}</b>
        </div>
      </div>
      <div className="album-info">
        <b>{`${album?.name} is an ${album?.album_type} by ${artists?.join(
          ", "
        )} with ${album?.total_tracks} track(s)`}</b>
      </div>
      <div className="album-release">
        <b>Release Date: {album?.release_date}</b>
      </div>
    </div>
  );
}
