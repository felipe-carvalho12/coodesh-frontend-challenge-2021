import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Header() {
  return (
    <div className="fixed w-full h-14 px-10 flex justify-between items-center shadow-lg bg-primary lg:h-20">
      <div className="h-full flex items-center">
        <h1>Pharma Inc</h1>
      </div>
      <div className="h-full flex items-center">
        <AccountCircleIcon className="icon-lg" />
      </div>
    </div>
  );
}
