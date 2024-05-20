import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import MovieCarousal from "./MovieCarousal";
import CardCarousal from "./CardCarousal";
// import Carousal from "./Carousal";
// import Seatmapp from "./Seatmapp";
// import Movies from "./Pages/MoviesPage";

const Home = () => {
  return (
    <>
      <Navbar />
      <br />
      <Header />
      <br />
      <MovieCarousal />
      <br />
      <CardCarousal />
      {/* <Carousal /> */}
      {/* <Seatmapp /> */}
      {/* <Movies /> */}
    </>
  );
};

export default Home;
