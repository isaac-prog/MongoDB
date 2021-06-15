import React from 'react'
import './style.css'


class MainPage extends React.Component{
    render(){
        return(
            <React.Fragment> 
                <div class="header">
                    {/* <a href="#default"><img src={require("./../images/computerlogo.jpg").default}/></a> */}
                <div class="header-right">
                    <a class="active" href="#home">Home</a>
                    <a class="active" href="#contact">Add Content</a>
                    <a class="active" href="#about">About</a>
                    </div>
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