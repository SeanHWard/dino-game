"use client";
import React from "react";
import Image from "next/image";

const OverlayButton = () => {
  return (
    <div className="absolute bottom-4 right-4 border border-gray-200 rounded-md shadow-sm px-6 py-2 font-normal text-md text-gray-700">
      Brought to you by{" "}
      <Image
        src="/PluqLogo.png"
        alt="Pluq"
        width={50}
        height={50}
        className="inline h-6 w-6"
      />{" "}
      <span className="font-semibold text-black">Pluq</span>
    </div>
  );
};

export default OverlayButton;
