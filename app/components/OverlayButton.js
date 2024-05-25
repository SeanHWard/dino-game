"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const OverlayButton = () => {
  return (
    <Link
      href="https://pluq.io"
      target="_blank"
      className="absolute bottom-4 right-4 border border-gray-200 rounded-md shadow-sm px-3 py-1.5 font-normal text-sm text-gray-700 hover:border-gray-300 hover:text-gray-800 hover:bg-gray-50 transition duration-200 ease-in-out flex items-center justify-center space-x-1"
    >
      In partnership with{" "}
      <Image
        src="/PluqLogo.png"
        alt="Pluq"
        width={50}
        height={50}
        className="inline h-6 w-6"
      />{" "}
      <span className="font-bold text-black text-md">Pluq</span>
    </Link>
  );
};

export default OverlayButton;
