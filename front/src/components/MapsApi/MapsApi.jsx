import { memo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

// ARGENTINA
const center = {
  lat: -34.60941476725957,
  lng: -58.3858213450193,
};

// RJ
// const center = {
//   lat: -22.951801906408157,
//   lng: -43.21045892275318,
// };

function MapsApi() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBirMiXllc-qsYzLgMG_9ofQ658eWknZsI",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="rounded shadow "
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
    >
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(MapsApi);
