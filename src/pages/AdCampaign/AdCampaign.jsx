import { Button } from "@nextui-org/react";
import React, { useCallback, useState } from "react";
import StepsProgress from "./StepsProgress";
import Goals from "./WhatYouWant/Goals";
import Products from "./Product/Products";
import CampaignSettings from "./CampaignSettings/CampaignSettings";
import ReadyToGo from "./ReadyToGo/ReadyToGo";

function AdCampaign() {
  const steps = ["goals", "products", "settings", "ready"];
  const [progress, setProgress] = useState(1);

  const handleClick = () => {
    setProgress((prev) => prev + 1);
  };

  const handleSubmit = () => {
    alert("Campaign created !!");
  };

  const continueButton = (
    <div className="flex justify-end items-end mt-5">
      {progress < 4 ? (
        <Button
          className="px-14"
          size="md"
          color="primary"
          onClick={handleClick}
        >
          Continue
        </Button>
      ) : (
        <Button
          className="px-14"
          size="md"
          color="primary"
          onClick={handleSubmit}
        >
          Create Campaign
        </Button>
      )}
    </div>
  );

  const content = (progress) => {
    if (progress === 1)
      return (
        <>
          <div className="mt-2 border bg-white p-3 rounded-xl">
            <Goals />
          </div>
          {continueButton}
        </>
      );
    else if (progress === 2)
      return (
        <>
          <div className="mt-2 border bg-white p-3 rounded-xl">
            <Products />
          </div>
          {continueButton}
        </>
      );
    else if (progress === 3)
      return (
        <div className="grid grid-cols-3">
          <div className="mt-2 border bg-white p-3 rounded-xl col-span-2">
            <CampaignSettings />
          </div>
          <div className="flex justify-center">{continueButton}</div>
        </div>
      );
    else if (progress === 4)
      return (
        <>
          <div className="mt-2 border bg-white p-3 rounded-xl">
            <ReadyToGo />
          </div>
          {continueButton}
        </>
      );
  };

  return (
    <div className="p-10 bg-slate-200 w-full h-full">
      <div className="flex">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Your Ad Campaign</h2>
          <span className="text-sm text-slate-400">
            Launch your ad in just 4 easy steps
          </span>
        </div>
      </div>
      {/* <Stepper /> */}
      <StepsProgress progress={progress} />
      {content(progress)}
    </div>
  );
}

export default AdCampaign;
