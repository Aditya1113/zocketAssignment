import React from "react";
import data from "./data";
import { Spacer } from "@nextui-org/react";
import ProductsItems from "./ProductsItems";

const Products = () => {
  return (
    <div>
      <div className="flex flex-row border-b-1 pb-2">
        <h4 className="font-bold text-md mr-3">Choose your product </h4>
        <span className="text-xs text-slate-500 my-auto">(Step 2 of 4)</span>
      </div>
      <Spacer y={4} />
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => {
          return (
            <ProductsItems
              src={item.src}
              key={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
