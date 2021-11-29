import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";

const ImageCard = ({ id_name }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dattnwl2u",
    },
  });
  const image = cld.image(id_name);
  image.resize(scale().width(250).height(225));

  return <AdvancedImage cldImg={image}></AdvancedImage>;
};
export default ImageCard;
