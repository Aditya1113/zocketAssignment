import React from "react";
import { Spacer, Tabs, Tab, Input } from "@nextui-org/react";
import { MapPinIcon } from "@heroicons/react/24/outline";

const CampaignSettings = () => {
  return (
    <div>
      <div className="flex flex-row border-b-1 pb-2">
        <h4 className="font-bold text-md mr-3">Campaign Settings </h4>
        <span className="text-xs text-slate-500 my-auto">(Step 3 of 4)</span>
      </div>
      <Spacer y={4} />
      <div className="relative top-11">
      <img src = "src/assets/numberOne.svg"/>
      </div>

      

      <div className="w-full py-4 px-8">
        <div className="flex">
          <div className="relative right-5 top-8">
        <img src = "src/assets/line.svg"/>
        </div>
        <div>
          <h3 className="font-bold underline mx-0">Budget and dates info</h3>

       
          <div className="mt-5 flex flex-col">
            <span className="text-xs text-slate-500 mb-2 font-semibold">
              Budget Timeline
            </span>
            <Tabs
              className=""
              key="primary"
              color="primary"
              aria-label="Tabs colors"
              radius="full"
              // variant="light"
            >
              <Tab key="photos" title="Photos" />
              <Tab key="music" title="Music" />
            </Tabs>
          </div>
          <div className="mt-5 grid w-full justify-between gap-2 grid-cols-2">
            <div className="grid grid-row-2 gap-1">
              <span className="text-xs text-slate-500 font-semibold">
                Start Date
              </span>
              <input
                className="border rounded-xl p-2"
                type="date"
                name="startDate"
                id="startDate"
              />
            </div>
            <div className="grid grid-row-2 gap-1">
              <span className="text-xs text-slate-500 font-semibold">
                End Date
              </span>
              <input
                className="border rounded-xl p-2"
                type="date"
                name="endDate"
                id="endDate"
              />
            </div>
          </div>
          <div className="mt-5 grid grid-row-2 gap-1">
            <span className="text-xs text-slate-500 font-semibold">
              Enter Campaign budget
            </span>
            <input type="range" />
            </div>
          </div>
        </div>
     
      
      
        <div className="mt-8">
          <div className="flex ">
          <img src = "src/assets/numberTwo.svg" className="relative right-8 bottom-1"/>
          <h3 className="font-bold underline relative right-5">Location Info</h3>
          </div>
         
          <div className="mt-5 flex flex-col">
            <span className="text-xs text-slate-500 mb-2 font-semibold">
              Location type
            </span>
            <Tabs
              className=""
              key="primary"
              color="primary"
              aria-label="Tabs colors"
              radius="full"
              // variant="light"
            >
              <Tab key="photos" title="Location" />
              <Tab key="music" title="Radius" />
            </Tabs>
          </div>
          <div className="mt-5">
            <Input
              type="text"
              label="Select Location"
              labelPlacement="outside"
              placeholder="Select a place name, address or cordinates"
              endContent={
                <MapPinIcon className="w-5 h-5 pointer-events-none flex-shrink-0" />
              }
              classNames={{
                label: "text-xs text-slate-500",
              }}
            />
          </div>
          <div className="mt-5 grid grid-row-2 gap-1">
            <span className="text-xs text-slate-500 font-semibold">
              Select target radius
            </span>
            <input type="range" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSettings;
