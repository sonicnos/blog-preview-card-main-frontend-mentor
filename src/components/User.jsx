import React from "react";
import Image from "./Image";

const User = ({ image, text, className }) => {
  return (
    <div className={className}>
      <Image className="h-9" src={image} />
      <p className="font-bold">{text}</p>
    </div>
  );
};

export default User;
