import React, { useState } from "react";

const Seatmapp = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const seatPrice = 120;

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) => {
      let updatedSelectedSeats;

      if (prevSelectedSeats.includes(seatNumber)) {
        updatedSelectedSeats = prevSelectedSeats.filter(
          (seat) => seat !== seatNumber
        );
      } else {
        updatedSelectedSeats = [...prevSelectedSeats, seatNumber];
      }

      const anySeatsSelected = updatedSelectedSeats.length > 0;
      setShowPayment(anySeatsSelected);
      return updatedSelectedSeats;
    });
  };

  const calculateTotalAmount = () => {
    return selectedSeats.length * seatPrice;
  };

  const handlePayment = () => {
    console.log("Payment initiated!");
  };

  return (
    <div>
      <h1 className="text-center mt-4">Select Your Seat . . . !</h1>
      <div className="container mx-auto p-4 relative">
        <div className="grid grid-cols-12 gap-4">
          {Array.from({ length: 96 }, (_, index) => (
            <button
              key={index}
              className={`border-2 rounded-md p-2 ${
                selectedSeats.includes(index + 1)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleSeatSelection(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {showPayment && (
          <div
            className="mt-4 fixed bottom-0 w-full z-10 h-14 mb-10"
            onClick={handlePayment}
          >
            <div className="flex justify-center items-center relative">
              <div className="bg-red-500 w-2/6 h-10 items-center rounded-md absolute top-2 mr-40">
                <button className="text-white ml-44 py-2 px-4">
                  Pay Rs. ₹{calculateTotalAmount()}.00
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Seatmapp;
