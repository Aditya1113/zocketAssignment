import React from "react";
import { Image } from "@nextui-org/react";
import IconTickSmall from "./IconTickSmall";

const ProductsItems = ({ src, title, description }) => {
  return (
    <div className="flex border rounded-lg pt-2 pb-3">
      <div className="flex flex-col justify-center items-center align-middle mx-2">
        <Image
          className="rounded-lg"
          width={100}
          height={100}
          radius="none"
          src={src}
        />
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold">{title}</h4>
        <span className="text-xs text-slate-500">{description}</span>
      </div>
      <div className="flex flex-col justify-center items-center align-middle ml-auto mr-2">
        <IconTickSmall />
      </div>
    </div>
  );
};

export default ProductsItems;
