import React from "react";
import HotelCard from "./HotelCard";
import Image from "next/image";
import HotelMainContent from "./HotelMainContent";
import HotelSideContents from "./HotelSideContents";
import type { Hotel } from "./types/HotelsType";

const index: React.FC<{ prop: Hotel }> = ({ prop }) => {
  return (
    <HotelCard>
      {prop.pictureLink ? (
        <Image
          src={prop.pictureLink}
          alt="hotel"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      ) : (
        <Image
          src={'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt="hotel"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      )}
      <HotelMainContent {...prop} />
      <HotelSideContents {...prop} />
    </HotelCard>
  );
};

export default index;
