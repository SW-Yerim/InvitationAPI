import React from "react";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk";

const LocationApi = () => {
  return (
    <div className="w-full max-w-lg mx-auto mb-10">
      <Map
        center={{ lat: 37.520146, lng: 127.055441 }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: 37.520146, lng: 127.055441 }}></MapMarker>
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
      </Map>
    </div>
  );
};

export default LocationApi;
