import React from 'react'
import axios from 'axios'
import './style.css'

export default class EditCasePage extends React.Component{
    url = "https://3000-tan-rook-y7i5rwec.ws-us08.gitpod.io/"

    state= {
        data: [],
        editedCaseName: "",
        editedCaseType: "",
        editedCaseColor: "",
        editedCaseDescription: "",
        editedCaseBrand: "",
        editedCaseImage: "",
        taskBeingEdited: 0,
        modifiedTaskName: ""
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "case/" + this.props.id + "/edit");
        this.setState({
          data:response.data,
          editedCaseName: response.data.name,
          editedCaseType: response.data.type,
          editedCaseColor: response.data.color,
          editedCaseDescription:  response.data.description,
          editedCaseBrand: response.data.brand,
          editedCaseImage: response.data.image,
        })
        this.updateTask(this.props.id);
        this.setState({
        taskBeingEdited: 0
        })
}

updateTask = async (task_id) => {
  let newdata = {
    _id: task_id,
    name: this.state.editedCaseName,
    type: this.state.editedCaseType,
    color: this.state.editedCaseColor,
    description: this.state.editedCaseDescription,
    brand: this.state.editedCaseBrand,
    image: this.state.editedCaseImage
  }
  let response = await axios.post(this.url + "case/" + this.props.id + "/edit", newdata);
}
    
    render() {
        return (
            <React.Fragment>
                <div class="create-edit-field">
                <h2>Create edited case</h2>
            <div>
                <label>Case name</label><br/>
                <input
                    type="text"
                    name="editedCaseName"
                    value={this.state.editedCaseName}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case type</label><br/>
                <input
                    type="text"
                    name="editedCaseType"
                    value={this.state.editedCaseType}
                    onChange={this.updateFormField}
                /><br/><br/>
                
                <label>Case Color</label><br/>
                <input
                    type="text"
                    name="editedCaseColor"
                    value={this.state.editedCaseColor}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case brand</label><br/>
                <input
                    type="text"
                    name="editedCaseBrand"
                    value={this.state.editedCaseBrand}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case image (URL ONLY)</label><br/>
                <input
                    type="text"
                    name="editedCaseImage"
                    value={this.state.editedCaseImage}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case description</label><br/>
                <textarea class="description-textbox"
                    type="text"
                    name="editedCaseDescription"
                    value={this.state.editedCaseDescription}
                    onChange={this.updateFormField}/>
                    <br/><br/>

                <button onClick={() => this.updateTask(this.props.id)}>Update Changes</button>
                </div><br/>
                </div>
                
            </React.Fragment>
        )
    }
}

