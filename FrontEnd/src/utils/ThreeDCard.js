"use client";

// import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import ProfileCard from "../components/profileCard";
import { images } from "./image";

export function ThreeDCard({callTo, name, shortBio, quailification, experience, preferdTiming}) {
  return (
    <CardContainer className="inter-var m-5 ">
      <CardBody className="bg-gray-50 text-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-200/[0.4] dark:bg-white dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-gray-700"
        >
          {name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-gray-600"
        >
         {shortBio}
        </CardItem>
        <div className="flex items-center ">
          <CardItem translateZ="100" className="w-full mt-4 m-2">
            <img
              src={images[7].url}
              height="200"
              width="200"
              className="object-cover rounded-xl group-hover/card:shadow-2xl"
              alt="thumbnail"
            />
          </CardItem>
          <ProfileCard quailification={quailification} experience={experience} preferedTime={preferdTiming} />
        </div>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-black"
            onClick={callTo}
          >
            Details →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-black text-xs font-bold"
            onClick={callTo}
          >
            connect
          </CardItem>
          {/* <Buttons text={"Connect"} /> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}
