import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css'

export default function MainPage() {
    return (

      <React.Fragment> 
      <div class="header">
           <a href="#default"><img class='logo'src={require("./../images/computerlogo.jpg").default}/></a> 

          <ul class="nav-container">
          <li><a class="active" href="#home">Home</a></li>
          <li><a class="active" href="#contact">Add Content</a></li>
          <li><a class="active" href="#about">About</a></li>
          </ul>

          </div>

        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img class="carousel-image" src="../pcCarousel1.jpg" />
                </div>
                <div>
                    <img class="carousel-image" src="../pcCarousel2.jpg" />
                </div>
                <div>
                    <img class="carousel-image" src="../pcCarousel3.jpg" />
                </div>
            </Carousel>
        </div>
      </React.Fragment>
    );
}