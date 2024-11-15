import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 1.5 },
  { width: 768, itemsToShow: 2.5, itemsToScroll: 2 },
];

export default function FlightsAndActivitiesPromotionsCarousel() {
  return (
    <>
      <h4 className="text-center mb-3 mt-5">Flights & Activities Promotions</h4>
      <Carousel breakPoints={breakPoints}>
        <div className="mx-2 text-center">
          <img src="https://cdn6.agoda.net/images/WebCampaign/wcSP20230811IN/home_banner_web/en-us.jpg" alt="#ImgNotFound" className='w-100' />
        </div>
        <div className="mx-2 text-center">
          <img src="https://cdn6.agoda.net/images/WebCampaign/wcMM20230312/home_banner_web2/en-us.png" alt="#ImgNotFound" className='w-100' />
        </div>
        <div className="mx-2 text-center">
          <img src="https://cdn6.agoda.net/images/WebCampaign/wcSP20230201IN/home_banner_web/en-us.png" alt="#ImgNotFound" className='w-100' />
        </div>
        <div className="mx-2 text-center">
          <img src="https://cdn6.agoda.net/images/WebCampaign/wcSP20230812LK/home_banner_web/en-us.png" alt="#ImgNotFound" className='w-100' />
        </div>
        <div className="mx-2 text-center">
          <img src="https://cdn6.agoda.net/images/WebCampaign/wcSP20230810LalitIN/home_banner_web/en-us.png" alt="#ImgNotFound" className='w-100' />
        </div>
        <div className="mx-2 text-center">
          <img src="https://cdn6.agoda.net/images/WebCampaign/wcSP20230529FabIN/home_banner_web/en-us.png" alt="#ImgNotFound" className='w-100' />
        </div>
        <div className="mx-2 text-center">
          <img src="https://cdn6.agoda.net/images/WebCampaign/wc_20230731_customerreviewawards/home_banner_web/en-us.png" alt="#ImgNotFound" className='w-100' />
        </div>
        <div className="mx-2 text-center">
          <img src="https://cdn6.agoda.net/images/WebCampaign/wcMM20230312/home_banner_web2/en-us.png" alt="#ImgNotFound" className='w-100' />
        </div>
        <div className="mx-2 text-center">
          <img src="https://cdn6.agoda.net/images/WebCampaign/wcSP20230201IN/home_banner_web/en-us.png" alt="#ImgNotFound" className='w-100' />
        </div>
      </Carousel>
    </>
  );
}