import MainExelTojson from "@/components/update-price/main-exel-to-json";
import { client } from "@/sanity/lib/client";
import React from "react";

export default function page() {
  const handlerUpdatePrice = () => {
    client
      .patch("bike-123") // Document ID to patch
      .set({ inStock: false }) // Shallow merge
      .inc({ numSold: 1 }) // Increment field by count
      .commit() // Perform the patch and return a promise
      .then((updatedBike) => {
        console.log("Hurray, the bike is updated! New document:");
        console.log(updatedBike);
      })
      .catch((err) => {
        console.error("Oh no, the update failed: ", err.message);
      });
  };
  return (
    <div>
      <MainExelTojson></MainExelTojson>
    </div>
  );
}
