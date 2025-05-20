"use client";
import React, { useState, useEffect } from "react";
import DatePickerComponent from "@/components/common/DatePicker";
import PlacePicker from "@/components/common/PlacePicker";
import TimePickerComponent from "@/components/common/TimePicker";
import PlaceFinderBlank from "@/components/common/PlaceFinderBlank";
import {cars} from "@/data/cars"


export default function SideBar() {
   const [distance, setDistance] = useState(0);
    const [placeInput, setPlaceInput] = useState("");
    const [origin, setOrigin] = useState(null); // Optional: could be from PlacePicker
    const [destination, setDestination] = useState(null);
  
    
    useEffect(() => {
      setOrigin({
        lat: 45.8150,
        lng: 15.9819,
      });
      setDestination({
        lat: 46.8150,
        lng: 17.9819,
        
      });
      const params = new URLSearchParams(window.location.search);
      const inputValue = params.get("input");
      if (inputValue) {
        setPlaceInput(inputValue);
      }
    }, []);
  
    // This will run every time origin or destination changes
    useEffect(() => {
      if (!origin || !destination) return;
  
      const getDistance = (lat1, lon1, lat2, lon2, unit) => {
        if ((lat1 === lat2) && (lon1 === lon2)) return 0;
        const radlat1 = Math.PI * lat1 / 180;
        const radlat2 = Math.PI * lat2 / 180;
        const theta = lon1 - lon2;
        const radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) +
                   Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) dist = 1;
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === "K") dist = dist * 1.609344;
        if (unit === "N") dist = dist * 0.8684;
        return dist;
      };
  
      const d = getDistance(origin.lat, origin.lng, destination.lat, destination.lng, "K");
      setDistance(d.toFixed(2));
    }, [origin, destination]);
  return (
    <div className="box-tab-right">
      <div className="sidebar">
        <div className="d-flex align-items-center justify-content-between wow fadeInUp">
          <h6 className="text-20-medium color-text">Ride Summary</h6>
          <a
            className="text-14-medium color-text text-decoration-underline"
            href="/"
          >
            Edit
          </a>
        </div>
        <div className="mt-20 wow fadeInUp">
          <ul className="list-routes">
            <li>
              <span className="location-item">A </span>
              <span className="info-location text-14-medium">
                <PlacePicker />
              </span>
            </li>
            <li>
              <span className="location-item">B </span>
              <span className="info-location text-14-medium"><PlaceFinderBlank 
                                  onSelect={setDestination}
                                  defaultValue={placeInput}
                                /></span>
            </li>
          </ul>
        </div>
        <div className="mt-20 wow fadeInUp">
          <ul className="list-icons">
            <li>
              <span className="icon-item icon-plan"> </span>
              <span className="info-location text-14-medium">
                <DatePickerComponent />
              </span>
            </li>
            <li>
              <span className="icon-item icon-time"></span>
              <span className="info-location text-14-medium"><TimePickerComponent /></span>
            </li>
          </ul>
        </div>
        <div className="mt-20 wow fadeInUp">
          <div className="box-map-route">
          <iframe
                className="map-contact"
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d11120.727283665392!2d16.142688!3d45.827642000000004!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDXCsDQ5JzM3LjAiTiAxNsKwMDgnMzIuNiJF!5e0!3m2!1sen!2sus!4v1744805782391!5m2!1sen!2sus"
                style={{ border: "0px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
          <div className="box-info-route">
            <div className="info-route-left">
              <span className="text-14 color-grey">Total Distance</span>
              <span className="text-14-medium color-text">
                {distance} €
              </span>
            </div>
            <div className="info-route-left">
              <span className="text-14 color-grey">Total Time</span>
              <span className="text-14-medium color-text">3h 43m</span>
            </div>
          </div>
          <div className="border-bottom mt-30 mb-25"></div>
          <div className="mt-0">
            <span className="text-14 color-grey">Vehicle</span>
            <br />
            <span className="text-14-medium color-text">
              Mercedes-Benz E220
            </span>
          </div>
          <div className="border-bottom mt-30 mb-25"></div>
          <div className="mt-0">
            <span className="text-14 color-grey">Extra Options</span>
            <br />
            <span className="text-14-medium color-text">
              1 x Child Seat - $0.00
            </span>
          </div>
        </div>
      </div>
      <div className="sidebar wow fadeInUp">
        <ul className="list-prices list-prices-2">
          <li>
            <span className="text">Selected vehicle</span>
            <span className="price">$1150</span>
          </li>
        </ul>
        <div className="border-bottom mt-30 mb-15"></div>
        <ul className="list-prices">
          <li>
            <span className="text text-20-medium">Total</span>
            <span className="price text-20-medium">$1150</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
