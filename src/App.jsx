import "./App.css";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AdCampaign from "./pages/AdCampaign/AdCampaign";
import Campaign from "./pages/Campaign/Campaign";
import React from "react";

function App() {
  const [showAdCampaign, setShowAdCampaign] = React.useState(false);
  return (
    <>
      <div className="flex">
        <div className="h-screen w-16">
          <Sidebar />
        </div>
        <div className="flex flex-col w-full">
          <MyNavbar />
          {!showAdCampaign ? (
            <Campaign setShowAdCampaign={setShowAdCampaign} />
          ) : (
            <AdCampaign />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
