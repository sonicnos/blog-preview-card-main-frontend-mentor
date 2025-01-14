import React from "react";
import Banner from "./Banner";
import Image from "./Image";
import Title from "./Title";
import Published from "./Published";
import Description from "./Description";
import User from "./User";

const Card = ({
  image,
  alt,
  bannerText,
  publishedDate,
  title,
  description,
  username,
  usernameAvatar,
}) => {
  return (
    <div className="w-2/5 p-6 bg-white border border-black rounded-2xl sm:w-2/4  md:w-2/5 xl:h-3/5 xl:w-1/5 shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
      <Image className="w-full rounded-xl" src={image} alt={alt} />
      <Banner
        className="text-sm mt-6 mb-4 w-[82px] h-[30px] bg-[#f5d04e] flex items-center justify-center text-black font-bold rounded"
        text={bannerText}
      />
      <Published className="mb-6 text-xs font-thin" text={publishedDate} />
      <Title
        className="mb-6 text-lg font-bold hover:text-[#f5d04e] hover:cursor-pointer"
        text={title}
      />
      <Description className="w-5/6 text-gray-600 mb-7" text={description} />
      <User
        className="flex flex-row items-center gap-4"
        image={usernameAvatar}
        text={username}
      />
    </div>
  );
};

export default Card;
