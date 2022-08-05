import React from "react";
import "./imageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const url = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{url}</div>;
};

export default ImageList;
