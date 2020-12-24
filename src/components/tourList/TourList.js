import React, {  useState } from "react";
import Tour from "../tour/Tour";
import "./TourList.css";
import { tourData } from "../../tourData";

function TourList() {
  const [tours, setTours] = useState(tourData);
  return (
    <section className="tourList">
      {tours.map((tour, index) => {
        return <Tour key={index} tour={tour} />;
      })}
    </section>
  );
}

export default TourList;
