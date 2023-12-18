import { memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

function MapsApi({ mapLocation }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBirMiXllc-qsYzLgMG_9ofQ658eWknZsI",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="rounded shadow "
      mapContainerStyle={containerStyle}
      center={mapLocation}
      zoom={17}
    >
      <Marker position={mapLocation} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(MapsApi);
