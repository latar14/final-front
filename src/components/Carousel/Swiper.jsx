import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <div>
          <MDBCarousel className="class" showIndicators showControls keyboard interval={5000}>
      <MDBCarouselItem
      
        className='w-100 d-block'
        itemId={1}
        src='https://lyonturnbull.blob.core.windows.net/auction-headers/715%20Select%20Watches.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://lyonturnbull.blob.core.windows.net/auction-headers/721%20Paintings%20banner.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://lyonturnbull.blob.core.windows.net/2022-blogs/Ann%20Macbeth%20banner%20copy.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://lyonturnbull.blob.core.windows.net/2022-blogs/landt%20live%20banner%202.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src='https://lyonturnbull.blob.core.windows.net/auction-headers/715%20Select%20Jewellery.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src='https://lyonturnbull.blob.core.windows.net/auction-featured-images/712%20Books%20Homepage%20Banner.jpg'
        alt='...'
      />
    </MDBCarousel>
    </div>

  );
}