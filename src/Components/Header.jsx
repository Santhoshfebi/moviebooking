// import React from "react";

// import { Link } from "react-router-dom";
// const Header = () => {
//   return (
//     // main header
//     <div className="text-center px-40 bg-slate-400 h-16 py-2">
//       <ul className="flex items-center justify-center gap-4 text-lg text-center">
//         <button className="border rounded-2xl w-28 h-14">
//           <li>
//            ZZ
//           </li>
//         </button>
//         <button className="border rounded-2xl w-28 h-14">
//           <li>
//             <Link to={"./offers"}>Offers</Link>{" "}
//           </li>
//         </button>
//       </ul>
//     </div>
//   );
// };

// export default Header;



import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    // main header
    <div className="bg-[#F5F5F5] text-center flex justify-between px-40  py-2">
      {/* left header */}
      <div>
        <ul className="flex items-center justify-center gap-4 text-sm">
          <li> <Link to={"./movielist"}>Movies</Link>{" "}</li>
          <li>Stream</li>
          <li>Events</li>
          <li>Plays</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>
      </div>

      {/* right header */}

      <div className="ml-20">
        <ul className="flex items-center justify-center gap-4 text-xs">
          <li>
             <Link to={"./movielist"}>List of Movies</Link>{" "}
          </li>

          <li>Corporates</li>
          <li>
            <Link to={"../Components/"}>Offers</Link>{" "}
          </li>
          <li>Gift Cards</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
