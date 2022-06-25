import Image from "next/image";
import React from "react";

const HorrorCastle = () => {
  return (
    <section className="wrapper pb-28">
      <div className="border border-white rounded-lg">
        <div className="relative">
          <Image
            src="/static/images/horror.png"
            layout="responsive"
            width="100%"
            height="40"
            alt=""
          />
          <h1 className="absolute uppercase bottom-10 left-20">
            Horror Castle of Elilth
          </h1>
          <button className="btn-primary absolute top-10 right-10">
            Select Quest
          </button>
        </div>
        <div className="horror-castle-table"></div>
        <div className="py-5 px-16 rounded-b-lg bg-gray-dark flex flex-col md:flex-row justify-between gap-[10%]">
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-8">
            <Image
              src="/static/images/horror_castle_img1.png"
              layout="responsive"
              width="100%"
              height="130"
              alt=""
            />
            <div className="w-full h-full border border-gray rounded-lg flex flex-col items-center justify-center gap-4">
              <span className="text-gray">Add warrior</span>

              <div className="w-8 h-8 flex justify-center items-center border border-gray rounded-full">
                <Image
                  src="/static/icons/plus.svg"
                  width={15}
                  height={15}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-full border border-gray rounded-lg flex flex-col items-center justify-center gap-4">
              <span className="text-gray">Add warrior</span>

              <div className="w-8 h-8 flex justify-center items-center border border-gray rounded-full">
                <Image
                  src="/static/icons/plus.svg"
                  width={15}
                  height={15}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-3 gap-10 pt-5 md:pt-0">
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/static/images/horror_castle_img2.png"
                width="130"
                height="130"
                alt=""
              />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/static/images/horror_castle_img3.png"
                width="130"
                height="130"
                alt=""
              />
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/static/images/horror_castle_img4.png"
                width="130"
                height="130"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorrorCastle;
