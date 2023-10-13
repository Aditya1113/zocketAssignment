import React from "react";
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "ON/OFF", uid: "on/off" },
  { name: "CAMPAIGNS", uid: "campaign" },
  { name: "DATE-RANGE", uid: "date-range" },
  { name: "CLICKS", uid: "clicks" },
  { name: "BUDGET", uid: "budget" },
  { name: "LOCATION", uid: "location" },
  { name: "PLATFORM", uid: "platform" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Live now", uid: "live" },
  { name: "Exhausted", uid: "exhausted" },
  { name: "Paused", uid: "paused" },
];

const users = [
  {
    id: 1,
    "on/off": true,
    name: "Birthday Cake campaign",
    "date-range": "25Jul2020-01Aug2020",
    status: "Live now",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    location: "Chennai",
    clicks: 300,
    budget: "NR 3400",
    platform:'src/assets/facebook.svg'
  },
  {
    id: 2,
    "on/off": true,
    name: "Chocolate Cake campaign",
    "date-range": "25Jul2020-01Aug2020",
    status: "paused",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    location: "Chennai",
    clicks: 345,
    budget: "NR 3400",
    platform:
    'src/assets/facebook.svg'
  },
  {
    id: 3,
    "on/off": false,
    name: "Birthday Cake campaign",
    "date-range": "25Jul2020-01Aug2020",
    status: "exhausted",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    location: "Chennai",
    clicks: 300,
    budget: "NR 3400",
    platform:
    'src/assets/facebook.svg'
  },
  {
    id: 4,
    "on/off": false,
    name: "Birthday Cake campaign",
    "date-range": "25Jul2020-01Aug2020",
    status: "Live now",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    location: "Chennai",
    clicks: 300,
    budget: "NR 3400",
    platform:
    'src/assets/youtube.svg'
  },
  {
    id: 5,
    "on/off": true,
    name: "Birthday Cake campaign",
    "date-range": "25Jul2020-01Aug2020",
    status: "Live now",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    location: "Chennai",
    clicks: 300,
    budget: "NR 3400",
    platform:
     "src/assets/google.svg"
  },
  {
    id: 6,
    "on/off": true,
    name: "Birthday Cake campaign",
    "date-range": "25Jul2020-01Aug2020",
    status: "Live now",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    location: "Chennai",
    clicks: 300,
    budget: "NR 3400",
    platform:
      "https://www.pngguru.in/storage/uploads/images/Facebook%20Social%20Media%20icon%20stock%20png_1657957454_2044339521.webp",
  },
];

export { columns, users, statusOptions };
