import React from 'react'
import axios from 'axios'
import './../webPages/style.css'

export default class EditCoolerPage extends React.Component{
    url = "https://tgc-project2.herokuapp.com/"

    state= {
        data: [],
        editedCoolerName: "",
        editedCoolerType: "",
        editedCoolernoise_level: "",
        editedCoolerDescription: "",
        editedCoolerBrand: "",
        editedCoolerImage: "",
        taskBeingEdited: 0,
        modifiedTaskName: ""
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "cooler/" + this.props.id + "/edit");
        this.setState({
          data:response.data,
          editedCoolerName: response.data.name,
          editedCoolerType: response.data.type,
          editedCoolernoise_level: response.data.noise_level,
          editedCoolerDescription:  response.data.description,
          editedCoolerBrand: response.data.brand,
          editedCoolerImage: response.data.image,
        })
        this.updateTask(this.props.id);
        this.setState({
        taskBeingEdited: 0
        })
}

updateTask = async (task_id) => {
  let newdata = {
    _id: task_id,
    name: this.state.editedCoolerName,
    type: this.state.editedCoolerType,
    noise_level: this.state.editedCoolernoise_level,
    description: this.state.editedCoolerDescription,
    brand: this.state.editedCoolerBrand,
    image: this.state.editedCoolerImage
  }
  let response = await axios.post(this.url + "cooler/" + this.props.id + "/edit", newdata);
}
  
    
    render() {
        return (
            <React.Fragment>
                <div class="create-edit-field">
                <h2>Create edited cooler</h2>
            <div>
                <label>Cooler name</label><br/>
                <input
                    type="text"
                    name="editedCoolerName"
                    value={this.state.editedCoolerName}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cooler type</label><br/>
                <input
                    type="text"
                    name="editedCoolerType"
                    value={this.state.editedCoolerType}
                    onChange={this.updateFormField}
                /><br/><br/>
                
                <label>Cooler noise_level</label><br/>
                <input
                    type="text"
                    name="editedCoolernoise_level"
                    value={this.state.editedCoolernoise_level}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cooler brand</label><br/>
                <input
                    type="text"
                    name="editedCoolerBrand"
                    value={this.state.editedCoolerBrand}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cooler image (URL ONLY)</label><br/>
                <input
                    type="text"
                    name="editedCoolerImage"
                    value={this.state.editedCoolerImage}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Cooler description</label><br/>
                <textarea class="description-textbox"
                    type="text"
                    name="editedCoolerDescription"
                    value={this.state.editedCoolerDescription}
                    onChange={this.updateFormField}/>
                    <br/><br/>

                <button onClick={() => this.updateTask(this.props.id)}>Update Changes</button>
                </div><br/>
                </div>
                
            </React.Fragment>
        )
    }
}

