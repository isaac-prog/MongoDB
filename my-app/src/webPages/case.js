import React from 'react'
import './style.css'


class MainPage extends React.Component{
    render(){
        return(
            <React.Fragment> 
                <div class="header">
                     <a href="#default"><img class='logo'src={require("./../images/computerlogo.jpg").default}/></a> 

                    <ul class="nav-container">
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a class="active" href="#contact">Add Content</a></li>
                    <li><a class="active" href="#about">About</a></li>
                    </ul>
                    
                    </div>

<div class="wallPaper">
    <img class="image_center" src={require("./../images/computerCase.jpg").default}/>
</div> 

<table>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Type</th> 
    <th>Storage</th>
    <th>Brand</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
</table>


    </React.Fragment>
        )
    }
}

export default MainPage