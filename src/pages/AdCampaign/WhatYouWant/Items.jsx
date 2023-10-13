import React from "react";
import { Image } from "@nextui-org/react";

const Items = ({ src, title, description }) => {
  return (
    <div className="flex border rounded-lg pt-2 pb-3">
      <div className="flex flex-col justify-center items-center align-middle m-3">
        <Image radius="none" src={src} />
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">{title}</h4>
        <span className="text-xs text-slate-500">{description}</span>
      </div>
    </div>
  );
};

export default Items;
