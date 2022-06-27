import Image from "next/image";
import React from "react";

const ActiveQuests = () => {
  return (
    <div className="wrapper py-10">
      <h1 className="heading uppercase pb-10">Active Quests</h1>
      <div>
        <div className="flex rounded-lg">
          <div className="w-2/5">
            <Image
              src="/static/images/activeQuests.png"
              layout="responsive"
              width="100%"
              height="150"
              alt=""
            />
          </div>
          <div className="w-3/5 bg-gray-dark">
            <div className="px-6 md:px-12 pt-5 md:pt-10 pb-2 md:pb-3 border-b border-gray flex items-end justify-between">
              <h2 className="text-2xl font-bold uppercase m-0 leading-none">
                Academy of Yamato
              </h2>
              <button className="py-1 px-6 bg-primary rounded-lg text-base">
                Continue the expedition
              </button>
            </div>
            <div className="px-6 md:px-12 py-5 md:py-10">
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-black p-5 rounded-xl">
                  <h3 className="text-lg underline text-center py-5">Team</h3>
                  <div className="grid grid-cols-2 gap-5"></div>
                </div>
                <div className="bg-black p-5 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveQuests;
