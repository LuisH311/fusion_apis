import React from "react";
import "../styles/widgetEntry.css";

export default function WidgetEntry({ title, subtitle, image }) {
  return (
    <div className="entry-body flex">
      <img src={image} alt={title} className="entry-image" />
      <div className="entry-right-body flex">
        <b className="entry-title">{title}</b>
        <b className="entry-subtitle">{subtitle}</b>
      </div>
    </div>
  );
}
