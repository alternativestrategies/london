import React from 'react';
import {Carousel} from 'react-bootstrap';

const MainSlider = () => {
    return(
        
        <Carousel id="londonEye">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.redd.it/pvt68qgyc4231.jpg"
            alt="God's own Junkyard neon signs"
          />
          <Carousel.Caption>
          <h2>Where To Go</h2>
          <p>There Is So Much To Do And See In London</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://c1.hiqcdn.com/destreviewimages/1486539360_rotates_shareiq_31544_1486461457.063237.jpg"
            alt="London Eye"
          />
      
          <Carousel.Caption>
          <h2>Learn More</h2>
          <p>Learn More About One Of The Greatest Cities On Earth</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://secretldn.com/wp-content/uploads/2017/07/sketch-1.jpg"
            alt="sketch london's Glade room"
          />
      
          <Carousel.Caption>
          <h2>Where To Eat</h2>
          <p>So Many Options, So Little Time</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    );
}

export default MainSlider;
