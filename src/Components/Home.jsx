// import React from "react";
// import Navbar from "../Components/Navbar";
// import Header from "../Components/Header";
// import MovieCarousal from "./MovieCarousal";
// import CardCarousal from "./CardCarousal";
// // import SignIn from "./Pages/Signin";
// // import Carousal from "./Carousal";
// // import Seatmapp from "./Seatmapp";
// // import Movies from "./Pages/MoviesPage";

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <br />
//       <Header />
//       <br />
//       <MovieCarousal />
//       <br />
//       <CardCarousal />
//       {/* <Carousal /> */}
//       {/* <Seatmapp /> */}
//       {/* <Movies /> */}
//       {/* <SignIn /> */}
//     </>
//   );
// };

// export default Home;


import React  from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Carousal from '../Components/Carousal';
import CardCarousal from '../Components/CardCarousal';
import Footer from "../Components/Footer";

const Home = () => {

  return (
    <>
      <Navbar />
      <br />
      <Header />
      <br />
      <Carousal />
      <br />
      <CardCarousal />
       <br />
      <Footer />

    </>
  );
};

export default Home;
