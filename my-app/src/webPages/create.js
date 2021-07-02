import React from "react";
import '../webPages/style.css'
// import CreateCPUPage from "./CreateCpu.js"
// import CreateGraphicsPage from "./CreateGraphics.js"
// import CreateRAMPage from "./CreateRam.js"
// import CreateMOBOPage from "./CreateMobo.js"
// import CreatePSUPage from "./CreatePsu.js"
// import CreateStoragePage from "./CreateStorage.js"
// import CreateCoolerPage from "./CreateCooler.js"
import CreateCasePage from "../case/CreateCase.js"

export default class CreatePage extends React.Component{
    state = {
        "page": "createPage"
      }
      pageHandler(name) {
        this.setState({
          page: name
        })
      }
    render(){
        return (
            <React.Fragment> 

            {this.state.page == "createPage" ?
            <React.Fragment>
            
            <h1>Select a category to add</h1>
            <div class="parts-directory">
      
            <div class="flex-directory" onClick={() => this.pageHandler("CreateCPU")}>
            <div class="flex-directory-body"><h4>CPU</h4>
            <img class="directory-images" src={require("./../images/CPU.jpg").default} alt="CPU"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("CreateGraphics")}>
            <div class="flex-directory-body"><h4>Graphics</h4>
            <img class="directory-images" src={require("./../images/Graphics.jpg").default} alt="Graphics"/>
            </div>
            
            </div>
      
            <div class="flex-directory"onClick={() => this.pageHandler("CreateRAM")}>
            <div class="flex-directory-body"><h4>Memory</h4>
            <img class="directory-images" src={require("./../images/ram.jpg").default} alt="RAM"/>
            </div>
  
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("CreateMOBO")}>
            <div class="flex-directory-body"><h4>Motherboard</h4>
            <img class="directory-images" src={require("./../images/motherboard.jpg").default} alt="mobo"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("CreatePSU")}>
            <div class="flex-directory-body"><h4>PSU</h4>
            <img class="directory-images" src={require("./../images/PSU.jpg").default} alt="PSU"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("Createstorage")}>
            <div class="flex-directory-body"><h4>Storage</h4>
            <img class="directory-images" src={require("./../images/ssd.jpg").default} alt="storage"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("CreateCooler")}>
            <div class="flex-directory-body"><h4>Cooler</h4>
            <img class="directory-images" src={require("./../images/fan.jpg").default} alt="Cooler"/>
            </div>
            
            </div>
      
            <div class="flex-directory" onClick={() => this.pageHandler("CreateCase")}>
            <div class="flex-directory-body"><h4>Case</h4>
            <img class="directory-images" src={require("./../images/case.jpg").default} alt="Case"/>
            </div>
            </div>
      
            </div></React.Fragment> : ""
            }
      

            
            {/* {this.state.page === "CreateCPU" ? <CreateCPUPage/> : ""}
            {this.state.page === "CreateGraphics" ? <CreateGraphicsPage/> : ""}
            {this.state.page === "CreateRAM" ? <CreateRAMPage/> : ""}
            {this.state.page === "CreateMOBO" ? <CreateMOBOPage/> : ""}
            {this.state.page === "CreatePSU" ? <CreatePSUPage/> : ""}
            {this.state.page === "CreateStorage" ? <CreateStoragePage/> : ""}
            {this.state.page === "CreateCooler" ? <CreateCoolerPage/> : ""} */}
            {this.state.page === "CreateCase" ? <CreateCasePage/> : ""}
            
            </React.Fragment>
          );
    }
}

