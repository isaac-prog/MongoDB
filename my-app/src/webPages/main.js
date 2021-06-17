import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './style.css'

export default class MainPage extends React.Component{
    state = {
        "page": ""
      }
    
      pageHandler(name) {
        this.setState({
          page: name
        })
      }

    render(){
        return (
            <React.Fragment> 
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
      
            <div class="flex-directory" onClick={() => this.pageHandler("CPU")}>
            <div class="flex-directory-body"><h4>CPU</h4>
            <img class="directory-images" src={require("./../images/CPU.jpg").default} alt="CPU"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("Graphics")}>
            <div class="flex-directory-body"><h4>Graphics</h4>
            <img class="directory-images" src={require("./../images/Graphics.jpg").default} alt="Graphics"/>
            </div>
            
            </div>
      
            <div class="flex-directory"onClick={() => this.pageHandler("RAM")}>
            <div class="flex-directory-body"><h4>Memory</h4>
            <img class="directory-images" src={require("./../images/ram.jpg").default} alt="RAM"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("MOBO")}>
            <div class="flex-directory-body"><h4>Motherboard</h4>
            <img class="directory-images" src={require("./../images/motherboard.jpg").default} alt="mobo"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("PSU")}>
            <div class="flex-directory-body"><h4>PSU</h4>
            <img class="directory-images" src={require("./../images/PSU.jpg").default} alt="PSU"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("storage")}>
            <div class="flex-directory-body"><h4>Storage</h4>
            <img class="directory-images" src={require("./../images/ssd.jpg").default} alt="storage"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("Cooler")}>
            <div class="flex-directory-body"><h4>Cooler</h4>
            <img class="directory-images" src={require("./../images/fan.jpg").default} alt="Cooler"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("Case")}>
            <div class="flex-directory-body"><h4>Case</h4>
            <img class="directory-images" src={require("./../images/case.jpg").default} alt="Case"/>
            </div>
            </div>
      
            </div>
            
            {this.state.page === "CPU" ? <CPU /> : ""}
            {this.state.page === "Graphics" ? <Graphics /> : ""}
            {this.state.page === "RAM" ? <RAM /> : ""}
            {this.state.page === "MOBO" ? <MOBO /> : ""}
            {this.state.page === "PSU" ? <MainPage /> : ""}
            {this.state.page === "Storage" ? <Storage /> : ""}
            {this.state.page === "Cooler" ? <Cooler /> : ""}
            {this.state.page === "Case" ? <Case /> : ""}
      
            <footer>
            ✉
            ☏
            🖶
            </footer>
            
            </React.Fragment>
          );
    }
    
}