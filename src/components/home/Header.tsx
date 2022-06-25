import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="home_hero w-full">
      <div className="wrapper py-20">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-7 md:col-span-5 rounded-lg bg-primary-dark">
            <h1 className="uppercase text-center py-4 border-b border-primary">
              My Warriors
            </h1>
            <div className="p-4 md:p-8 text-center">
              <span className="text-center text-xl py-5 block">
                Found 3 characters
              </span>
              <div className="grid grid-cols-2 gap-2 md:gap-5">
                <Image
                  src="/static/images/home_hero_grid_1.png"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  alt=""
                />
                <Image
                  src="/static/images/home_hero_grid_2.png"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  alt=""
                />
                <Image
                  src="/static/images/home_hero_grid_3.png"
                  layout="responsive"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-span-7">
            <Image
              src="/static/images/home_hero_img.png"
              layout="responsive"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
