import Embark from "@/components/home/Embark";
import Header from "@/components/home/Header";
import HorrorCastle from "@/components/home/HorrorCastle";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Header />
      <Embark />
      <div className="horror_active_section">
        <HorrorCastle />
      </div>
    </DefaultLayout>
  );
};

export default Home;
