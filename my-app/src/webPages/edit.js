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
        modifiedTaskName: "",
        modifiedTaskType: "",
        modifiedTaskColor: "",
        modifiedTaskDescription: "",
        modifiedTaskBrand: "",
        modifiedTaskImage: "",
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
          editedCaseName: this.state.data.name,
          editedCaseType: this.state.data.type,
          editedCaseColor: this.state.data.color,
          editedCaseDescription: this.state.data.description,
          editedCaseBrand: this.state.data.brand,
          editedCaseImage: this.state.data.image,
        })
}

updateTask = async (task_id) => {
  this.updateTask(this.props.id);
  this.setState({
  taskBeingEdited: 0
  })
  let response = await axios.post(this.url + "case/" + this.props.id +"/edit");
  let data = {
  _id: task_id
  }
  let currentTask = this.state.data.filter(t => t.id === task_id)[0];
  let modifiedTask = { ...currentTask };
  modifiedTask.editedCaseName = this.state.modifiedTaskName;
  modifiedTask.editedCaseType = this.state.modifiedTaskType;
  modifiedTask.editedCaseColor = this.state.modifiedTaskColor;
  modifiedTask.editedCaseDescription = this.state.modifiedTaskDescription;
  modifiedTask.editedCasebrand = this.state.modifiedTaskBrand;
  modifiedTask.editedCaseImage = this.state.modifiedTaskImage;
  let modifiedTasksList = this.state.data.map(t => {
    if (t.id !== task_id)
    {
      return t;
  }
    else {
          return modifiedTask;
        }
      });
      this.setState({
        data: modifiedTasksList
      });
    };
    
    render() {
        return (
            <React.Fragment>
                <div class="create-edit-field">
                <h2>Create edited case</h2>
            <div>
                <label>Case name</label><br/>
                <input
                    type="text"
                    name="modifiedTaskName"
                    value={this.state.modifiedTaskName}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case type</label><br/>
                <input
                    type="text"
                    name="modifiedTaskType"
                    value={this.state.modifiedTaskType}
                    onChange={this.updateFormField}
                /><br/><br/>
                
                <label>Case Color</label><br/>
                <input
                    type="text"
                    name="modifiedTaskColor"
                    value={this.state.modifiedTaskColor}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case brand</label><br/>
                <input
                    type="text"
                    name="modifiedTaskBrand"
                    value={this.state.modifiedTaskBrand}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case image (URL ONLY)</label><br/>
                <input
                    type="text"
                    name="modifiedTaskImage"
                    value={this.state.modifiedTaskImage}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Case description</label><br/>
                <textarea class="description-textbox"
                    type="text"
                    name="modifiedTaskDescription"
                    value={this.state.modifiedTaskDescription}
                    onChange={this.updateFormField}
                    placeholder={this.state.data.description}
                /><br/><br/>

                <button onClick={this.updateTask}>Update Changes</button>
                </div><br/>
                </div>
            </React.Fragment>
        )
    }
}

