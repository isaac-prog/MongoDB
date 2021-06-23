import './App.css';
import MainPage from './webPages/main.js'
import CreatePage from './webPages/create.js';
import React from 'react';
import './webPages/style.css'

class App extends React.Component {
  state = {
    "page": "home"
  }

  pageHandler(name) {
    this.setState({
      page: name
    })
  }

  render() {
    return ( 
      <React.Fragment >
                    <div class="header">                      
                 <a href="#default"><img class='logo'src={require("./images/computerlogo.jpg").default}/></a> 
                <ul class="nav-container">
                <li onClick={() => this.pageHandler("home")}><a class="active">Home</a></li>
                <li onClick={() => this.pageHandler("create")}><a class="active">Add Content</a></li>
                <li><a class="active">About</a></li>
                </ul>
                </div>
                
              {this.state.page === "home" ? <MainPage /> : ""}
              {this.state.page === "create" ? <CreatePage /> : ""}
      </React.Fragment>
    )
  }
}
export default App;