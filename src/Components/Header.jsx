import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    // main header
    <div className="text-center px-40 bg-slate-400 h-16 py-2">
      <ul className="flex items-center justify-center gap-4 text-lg text-center">
        <button className="border rounded-2xl w-28 h-14">
          <li>
            <Link to={"./movielist"}>List of Movies</Link>{" "}
          </li>
        </button>
        <button className="border rounded-2xl w-28 h-14">
          <li>
            <Link to={"./offers"}>Offers</Link>{" "}
          </li>
        </button>
      </ul>
    </div>
  );
};

export default Header;
