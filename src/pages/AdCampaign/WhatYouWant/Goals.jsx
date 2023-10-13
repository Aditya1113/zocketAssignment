import React from "react";
import data from "./data";
import Items from "./Items";
import { Spacer } from "@nextui-org/react";

const Goals = () => {
  return (
    <div>
      <div className="flex flex-row border-b-1 pb-2">
        <h4 className="font-bold text-md mr-3">What do you want to do? </h4>
        <span className="text-xs text-slate-500 my-auto">(Step 1 of 4)</span>
      </div>
      <Spacer y={4} />
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => {
          return (
            <Items
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

export default Goals;
