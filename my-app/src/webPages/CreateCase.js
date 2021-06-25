import React from 'react'
import axios from 'axios'

export default class CreateCasePage extends React.Component{
    url = "https://3000-violet-piranha-v4r6764u.ws-us08.gitpod.io/"

    state= {
        newName: "",
        newType:"",
        newcolor: "",
        newBrand: "",
        newImage: "",
        newDescription:""
    }
    
    updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
      }

      async componentDidMount() {
        let response = await axios.get(this.url + "case");
}