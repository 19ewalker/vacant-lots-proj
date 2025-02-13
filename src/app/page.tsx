"use client";

import React, { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import Hotjar from "./components/Hotjar";

const Page: FC = () => {
  return (
    <NextUIProvider>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <div className="flex-grow">
          <LandingPage />
        </div>
        <Footer />
        <Hotjar />
      </div>
    </NextUIProvider>
  );
};

export default Page;
