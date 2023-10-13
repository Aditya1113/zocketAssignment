import React from "react";
import data from "./data";
import { Spacer } from "@nextui-org/react";
// import ProductsItems from "./ProductsItems";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Image,
} from "@nextui-org/react";

const ReadyToGo = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <div>
      <div className="flex flex-row border-b-1 pb-2">
        <h4 className="font-bold text-md mr-3">Ready To Go</h4>
        <span className="text-xs text-slate-500 my-auto">(Step 4 of 4)</span>
      </div>
      <Spacer y={4} />
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => {
          return (
            <Card className="max-w-[500px]">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src={item.avatar}
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      {item.user}
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400">
                      Sponsered
                    </h5>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p className="pb-2">{item.description}</p>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item.src}
                  width={270}
                />
              </CardBody>
              <CardFooter className="flex flex-wrap justify-evenly gap-3">
                <div className="flex gap-1">
                  <Button variant="flat" color="primary">
                    Change Image
                  </Button>
                </div>
                <div className="flex gap-1">
                  <Button variant="flat" color="primary">
                    Edit Text
                  </Button>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ReadyToGo;
