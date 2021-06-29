import React from "react";
import './style.css';
import EditCasePage from "./eCase.js"

export default class EditPage extends React.Component{
    state = {
        "page": "edit"
      }
      pageHandler(name) {
        this.setState({
          page: name
        })
    }

    render(){
            return (
                <React.Fragment> 
    
                {this.state.page == "editPage" ?
                <React.Fragment>

                <div class="wallPaper">
                    <img class="image_center" src={require("./../images/edit.jpg").default}/>
                </div>
                
                <h1>Select a category to edit</h1>
                <div class="parts-directory">
          
                <div class="flex-directory" onClick={() => this.pageHandler("EditCPU")}>
                <div class="flex-directory-body"><h4>CPU</h4>
                <img class="directory-images" src={require("./../images/CPU.jpg").default} alt="CPU"/>
                </div>
                
                </div>
          
                <div class="flex-directory" onClick={() => this.pageHandler("EditGraphics")}>
                <div class="flex-directory-body"><h4>Graphics</h4>
                <img class="directory-images" src={require("./../images/Graphics.jpg").default} alt="Graphics"/>
                </div>
                
                </div>
          
                <div class="flex-directory"onClick={() => this.pageHandler("EditRAM")}>
                <div class="flex-directory-body"><h4>Memory</h4>
                <img class="directory-images" src={require("./../images/ram.jpg").default} alt="RAM"/>
                </div>
      
                </div>
          
                <div class="flex-directory" onClick={() => this.pageHandler("EditMOBO")}>
                <div class="flex-directory-body"><h4>Motherboard</h4>
                <img class="directory-images" src={require("./../images/motherboard.jpg").default} alt="mobo"/>
                </div>
                
                </div>
          
                <div class="flex-directory" onClick={() => this.pageHandler("EditPSU")}>
                <div class="flex-directory-body"><h4>PSU</h4>
                <img class="directory-images" src={require("./../images/PSU.jpg").default} alt="PSU"/>
                </div>
                
                </div>
          
                <div class="flex-directory" onClick={() => this.pageHandler("Editstorage")}>
                <div class="flex-directory-body"><h4>Storage</h4>
                <img class="directory-images" src={require("./../images/ssd.jpg").default} alt="storage"/>
                </div>
                
                </div>
          
                <div class="flex-directory" onClick={() => this.pageHandler("EditCooler")}>
                <div class="flex-directory-body"><h4>Cooler</h4>
                <img class="directory-images" src={require("./../images/fan.jpg").default} alt="Cooler"/>
                </div>
                
                </div>
          
                <div class="flex-directory" onClick={() => this.pageHandler("EditCase")}>
                <div class="flex-directory-body"><h4>Case</h4>
                <img class="directory-images" src={require("./../images/case.jpg").default} alt="Case"/>
                </div>
                </div>
          
                </div></React.Fragment> : ""
                }
          
    
                
                {/* {this.state.page === "EditCPU" ? <EditCPUPage/> : ""}
                {this.state.page === "EditGraphics" ? <EditGraphicsPage/> : ""}
                {this.state.page === "EditRAM" ? <EditRAMPage/> : ""}
                {this.state.page === "EditMOBO" ? <EditMOBOPage/> : ""}
                {this.state.page === "EditPSU" ? <EditPSUPage/> : ""}
                {this.state.page === "EditStorage" ? <EditStoragePage/> : ""}
                {this.state.page === "EditCooler" ? <EditCoolerPage/> : ""} */}
                {this.state.page === "EditCase" ? <EditCasePage/> : ""}
                
                </React.Fragment>
              );
        }
    }
    
    