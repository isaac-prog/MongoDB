import React from 'react'
import './style.css'


class casePage extends React.Component{
    render(){
        return(
            <React.Fragment> 
                <div class="header">
                    <a href="#default"><img src="computerlogo.jpg" alt="img"/></a>
                <div class="header-right">
                    <a class="active" href="#home">Home</a>
                    <a class="active" href="#contact">Add Content</a>
                    <a class="active" href="#about">About</a>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}

export default casePage