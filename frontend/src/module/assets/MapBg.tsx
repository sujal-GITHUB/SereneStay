// MapBg.tsx
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the MapComponent with SSR disabled
const DynamicMapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

function MapBg() {
  return (
    <div className="flex justify-center items-center">
      <DynamicMapComponent />
    </div>
  );
}

export default MapBg;