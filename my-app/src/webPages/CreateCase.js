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
        newDescription:"",


    }
        updateFormField = (event) => {
            this.setState({
                [event.target.name]: event.target.value,
            })
        }
    
        updateCheckBox= (event) =>{
            let currentValues= this.state[event.target.name];
            let modifiedValues;
            if (!currentValues.includes(event.target.value))
            {
                modifiedValues = [...currentValues, event.target.value];
            }
            else{
                modifiedValues = currentValues.filter((element)=>{
                    return element !== event.target.value;
                })
            
            }
            this.setState({
                colors: modifiedValues
            })
        }
    
        async componentDidMount() {
            let response = await axios.get(this.url + "case");
    }
    
        renderTypes() {
            let options = [];
            console.log(this.types);
            for (let type of this.types) {
            let e =   (<React.Fragment  key={type.value}>
                             <input name="types" type="radio" value={type.value} 
                             checked={this.state.types===type.value} 
                             onChange={this.updateFormField}
                            />
                        <span>{type.display}</span>
                      </React.Fragment>)
    
                options.push(e)
            }
            return options;
        }
        
        renderColours(){
                let options = [];
                for (let colours of this.colours){
                    let e = (
                        <React.Fragment key={colours.value}>
                            <input name='colours' type='radio' value={colours.value}
                            checked={this.state.colours===colours.value} 
                            onChange={this.updateFormField}
                           />
                       <span>{colours.display}</span>
                        </React.Fragment>
                    )
                    options.push(e)
                }
                return options;
            }

            addDescription = (event) => {
                let newTask = {
                    'id': Math.random() * 10000 + 9999,
                    'description': this.state.description,
                    'done': false
                }
                let currentValues = this.state.tasks;
                let modifiedValues = [...currentValues, newTask];
                this.setState({
                    'tasks': modifiedValues,
                    'description': ''
                })
            }

    render() {
        return (
            <React.Fragment>
                <label>Name</label><br/>
                    <input name='name' type='text' value={this.state.name} onChange={this.updateFormField}/><br/>
                    <div>
                    <label>Select a color:</label>
                    {this.renderColours()}
                </div>
                <div>
	            <label>Brand:</label>
	                <select name="brand" value={this.state.country} onChange={this.updateFormField}>
                    {this.brand.map( (c)=><option key={c.value}  value={c.value}>{c.display}</option>)}
                </select>
                </div>

                {this.types.map((f)=>(
	            <React.Fragment>
		            <input type="checkbox" 
			        key={f.value}
			        name="types" 
			        value={f.value}
			        checked={this.state.types.includes(f.value)}
			        onChange={this.updateCheckBox}/><span>{f.display}</span>
	            </React.Fragment>
                ))}

            <div>
				<label>types:</label>
				{this.renderTypes()}
			</div>
            
            <div>
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.updateFormField}
                />
                <button onClick={this.addDescription}>Submit</button>
            </div>

            </React.Fragment>
        )
    }
}

