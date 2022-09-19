import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({
    coordinates: { lat: "", lng: "" },
    loaded: false,
  });

  const onSuccess = async (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };
  const onError = (error) => {
    alert(error.message);
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
      //   setLocation((state) => ({
      //     ...state,
      //     loaded: true,
      //     errrr: {
      //       code: 0,
      //       message: "Geolocation not supported",
      //     },
      //   }));
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);
  return location;
};

export default useGeolocation;
