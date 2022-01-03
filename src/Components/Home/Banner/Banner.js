import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/Banner/banner5.jpg'
import banner2 from '../../../images/Banner/Banner7.jpg'
import banner3 from '../../../images/Banner/banner6.jpg'



const Banner = () => {
  return (
    <div >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className=" my-5">
                <small>Save up to 70% Special Day</small>
              <div className="mb-5 pb-5">
                <h1><strong className="text-white fw-bold">Special Gifts for Anniversary, Enjoy Your Day.</strong></h1>
                <br />
                <br />
             
              </div>
              <Link to={``}>
                <button className="btn btn-light text-success fw-bold">Explore Now</button>
              </Link>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className=" my-5">
                <small>Party with gold jewelry</small>
                <hr />
              <div className="mb-5 pb-5">
              <h1><strong className="text-dark fw-bold">Jewelry Trands Series 2020</strong></h1>
                <br />
                <br />
                
              </div>
              <Link to={``}>
                <button className="btn btn-light text-success fw-bold">Explore Now</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={banner3}
          />

          <Carousel.Caption>
            <div className=" my-5">
                <small className="text-dark">Collection Summer 2020</small>
                <hr />
              <div className="mb-5 pb-5">
              <h1><strong className="text-dark fw-bold">Celebrating Emerald Month</strong></h1>
                <br />
                <br />
               
              </div>
              <Link to={``}>
                <button className="btn btn-light text-success fw-bold">Explore Now</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
    </div >
  );
};

export default Banner;