import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const windowSize = useWindowSize();
  return (
    <nav className="sticky top-0 py-4 bg-black z-10">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" passHref>
          <Image
            src="/static/brand/brand-logo.png"
            width={windowSize.width > 768 ? "170" : "100"}
            height={windowSize.width > 768 ? "50" : "30"}
            alt=""
          />
        </Link>
        <div className="flex gap-4 md:gap-10">
          <button className="btn-secondary">Buy $KAGE</button>
          <button className="btn-primary">Select wallet</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
