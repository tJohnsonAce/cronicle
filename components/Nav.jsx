import React, { useState } from "react";
import navLogo from "../public/cronicleChain.png";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between flex-wrap p-6 bg-slate-100 bg-opacity-10 backdrop-filter backdrop-blur">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Cronicle</span>
      </div>
      <div>{/**/}</div>
    </nav>
  );
};

export default Nav;
