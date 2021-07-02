import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../webPages/style.css'
import CreatePage from "./create.js"
import CPUPage from "./cpu.js"
import GraphicsPage from "./graphics.js"
import RAMPage from "./ram.js"
import MOBOPage from "./mobo.js"
import PSUPage from "./psu.js"
import StoragePage from "./storage.js"
import CoolerPage from "./cooler.js"
import CasePage from "./../case/case.js";
import DisplayCasePage from "../case/displayCase.js"
import EditCasePage from "../case/editCase.js"

class MainPage extends React.Component{
    state = {
        "page": "home",
        id: ""
      }
      pageHandler = (name, id = "") => {
        this.setState({
          page: name,
          id: id
        })
      }
    render(){
        return (
          <React.Fragment >
                    <div class="header">                      
                 <a onClick={() => this.pageHandler("home")} href="#default"><img class='logo'src={require("../images/computerlogo.jpg").default}/></a> 
                <ul class="nav-container">
                <li onClick={() => this.pageHandler("home")}><a class="active">Home</a></li>
                <li onClick={() => this.pageHandler("create")}><a class="active">Add Content</a></li>
                </ul>
                </div>

            {this.state.page == "home" ?
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
      
            </div></React.Fragment> : ""
            }
      

            {this.state.page === "create" ? <CreatePage /> : ""}
            {this.state.page === "Graphics" ? <GraphicsPage/> : ""}
            {this.state.page === "RAM" ? <RAMPage/> : ""}
            {this.state.page === "MOBO" ? <MOBOPage/> : ""}
            {this.state.page === "PSU" ? <PSUPage/> : ""}
            {this.state.page === "Storage" ? <StoragePage/> : ""}
            {this.state.page === "Cooler" ? <CoolerPage/> : ""}

            {this.state.page === "CreateCpu" ? <CreateCpuPage/> : ""}
            {this.state.page === "CPU" ? <CpuPage pageHandler={this.pageHandler}/> : ""}
            {this.state.page === "displaycpu"? <DisplayCpuPage pageHandler={this.pageHandler} id={this.state.id}/> : ""}
            {this.state.page === "editcpu"? <EditCpuPage pageHandler={this.pageHandler} id={this.state.id}/> : ""}

            {this.state.page === "CreateCase" ? <CreateCasePage/> : ""}
            {this.state.page === "Case" ? <CasePage pageHandler={this.pageHandler}/> : ""}
            {this.state.page === "displaycase"? <DisplayCasePage pageHandler={this.pageHandler} id={this.state.id}/> : ""}
            {this.state.page === "editcase"? <EditCasePage pageHandler={this.pageHandler} id={this.state.id}/> : ""}
            <footer>
            ✉
            ☏
            🖶
            </footer>
            </React.Fragment>
          );
    }
}

export default MainPage