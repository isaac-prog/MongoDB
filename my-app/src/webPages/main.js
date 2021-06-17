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

      <div class="parts-directory">

      <div class="flex-directory">
      <div class="flex-directory-body"><h4>CPU</h4>
      <img class="directory-images" src={require("./../images/CPU.jpg").default} alt="CPU"/>
      
      </div>
      </div>

      <div class="flex-directory">
      <div class="flex-directory-body"><h4>Graphics</h4>
      <img class="directory-images" src={require("./../images/Graphics.jpg").default} alt="CPU"/>
      
      </div>
      </div>

      <div class="flex-directory">
      <div class="flex-directory-body"><h4>Memory</h4>
      <img class="directory-images" src={require("./../images/ram.jpg").default} alt="CPU"/>
      
      </div>
      </div>

      <div class="flex-directory">
      <div class="flex-directory-body"><h4>Motherboard</h4>
      <img class="directory-images" src={require("./../images/motherboard.jpg").default} alt="CPU"/>
      
      </div>
      </div>

      <div class="flex-directory">
      <div class="flex-directory-body"><h4>PSU</h4>
      <img class="directory-images" src={require("./../images/PSU.jpg").default} alt="CPU"/>
      
      </div>
      </div>

      <div class="flex-directory">
      <div class="flex-directory-body"><h4>Storage</h4>
      <img class="directory-images" src={require("./../images/ssd.jpg").default} alt="CPU"/>
      
      </div>
      </div>

      <div class="flex-directory">
      <div class="flex-directory-body"><h4>Cooler</h4>
      <img class="directory-images" src={require("./../images/fan.jpg").default} alt="CPU"/>
      
      </div>
      </div>

      <div class="flex-directory">
      <div class="flex-directory-body"><h4>Case</h4>
      <img class="directory-images" src={require("./../images/case.jpg").default} alt="CPU"/>
      
      </div>
      </div>

      </div>

      <footer>
      ✉
      ☏
      🖶
      </footer>
      </React.Fragment>
    );
}