import Image from "next/image";
import React from "react";

const Embark = () => {
  return (
    <section className="wrapper py-20">
      <div>
        <h1 className="heading">EMBARK ON A QUEST </h1>
        <p className="text-base pt-5">
          Send your team on a journey for rewards and glory
        </p>
      </div>
      <div className="w-full md:w-4/5 pt-14 grid grid-cols-2 md:grid-cols-3 gap-14">
        <div>
          <Image
            src="/static/images/embark_img1.png"
            layout="responsive"
            width="100%"
            height="100%"
            alt=""
          />
          <p className="text-xl pt-4 ">Horror Castle of Elilth</p>
        </div>
        <div>
          <Image
            src="/static/images/embark_img2.png"
            layout="responsive"
            width="100%"
            height="100%"
            alt=""
          />
          <p className="text-xl pt-4  text-gray">Training Ground</p>
        </div>
        <div>
          <Image
            src="/static/images/embark_img3.png"
            layout="responsive"
            width="100%"
            height="100%"
            alt=""
          />
          <p className="text-xl pt-4  text-gray">Cathedral of Afareith</p>
        </div>
      </div>
    </section>
  );
};

export default Embark;
