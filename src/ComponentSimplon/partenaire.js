import React from 'react';
import i1 from './images/ile.png'
import i2 from './images/le15.png'
import i3 from './images/soc1.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
const Partenaire = (props) => {
    return (
        <div className="partenaire">
          <h2>Nos Partenaires:</h2>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">  
  <div className="logo_car1"><img src={i1}/></div>
  <div className="logo_car2"><img src={i2}/></div>
  <div className="logo_car3"><img src={i3}/></div>
  
</Carousel>;
        </div>
    );
};

export default Partenaire ;