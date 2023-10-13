import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import MyTable from "./MyTable/MyTable";
import { PlusIcon } from "./MyTable/PlusIcon";

function Campaign({ setShowAdCampaign }) {
  return (
    <div className="p-10 bg-slate-200 w-full h-full">
      <div className="flex">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Your Campaigns</h2>
          <span className="text-sm text-slate-400">
            Check the list of Campaigns created.
          </span>
        </div>
        <div className="ml-auto">
          <Button
            color="primary"
            startContent={<PlusIcon />}
            onClick={() => setShowAdCampaign(true)}
          >
            Create New Campaigns
          </Button>
        </div>
      </div>
      <div className="mt-2 border bg-white p-3 rounded-xl">
        <MyTable />
      </div>
    </div>
  );
}

export default Campaign;
