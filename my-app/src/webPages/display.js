import React from "react";
import axios from "axios";


export default class DisplayPage extends React.Component {
 url = "https://3000-tan-rook-y7i5rwec.ws-us08.gitpod.io/";

 state = {
   data: [],
   filterTypes: [],
   filterColors: [],
   filterBrands: [],
 };

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
      Case: modifiedValues
  })
}

async componentDidMount() {
  let response = await axios.get(this.url + "case");

  console.log(response.data);
  let types = [];
  for(let data of response.data){
    if(!types.includes(data.type)){
      types.push(data.type);
    }
  }

  this.setState({
    data: response.data,
    filterTypes: types
  });

  let colors = [];
  for(let data of response.data){
    if(!colors.includes(data.color)){
      colors.push(data.color);
    }
  }

  this.setState({
    data: response.data,
    filterColors: colors
  });

  let brands = [];
  for(let data of response.data){
    if(!brands.includes(data.brand)){
      brands.push(data.brand);
    }
  }

  this.setState({
    data: response.data,
    filterBrands: brands
  });
}

deleteCase = async (task_id) => {
  let task_index = this.state.data.findIndex(t => t._id === task_id);
  let data = {
    _id: task_id
  }

  let response = await axios.post(this.url + "case/delete", data);
  let modifiedTasks = [
      ...this.state.data.slice(0, task_index),
      ...this.state.data.slice(task_index + 1),
      task_index
  ];
  this.setState({
      data: modifiedTasks
  });
};

 render() {
   return (
     <React.Fragment>
         {this.state.data.map(c => {
            return (
        <div>
       <div class="wallPaper">
          <img class="image_center" src={c.image}/>
          <h1>{c.name}</h1>
       </div>

        

       {/* table */}
<div id="flex-container">
    <div class="result-container">

    <h4>Description</h4>
    <div>{c.description}</div>
       </div>

    <div class="filter-container">

      <h4>Case type</h4>
      <div class="filter-segments">
	        <React.Fragment>
                {c.type}
	        </React.Fragment>
        </div>

        <h4>Case color</h4>
      <div class="filter-segments">
	        <React.Fragment>
                {c.color}
	        </React.Fragment>
        </div>

        <h4>Case brand</h4>
      <div class="filter-segments">
	        <React.Fragment>
                {c.brand}
	        </React.Fragment>
        </div>
        <button onClick={{}}>Filter</button>
     </div>
    </div>
    </div>
         )})}

     </React.Fragment>
   );
 }
}