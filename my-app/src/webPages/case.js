import React from "react";
import axios from "axios";

export default class Listing extends React.Component {
 url = "https://3000-violet-piranha-v4r6764u.ws-us08.gitpod.io/";

 state = {
   data: [],
   filterTypes: [],
   filterColors: [],
   filterBrands: []
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
      fruits: modifiedValues
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

 render() {
   return (
     <React.Fragment>
       <div class="wallPaper">
          <img class="image_center" src={require("./../images/computerCase.jpg").default}/>
       </div>

       {/* table */}
<div id="flex-container">
    <div class="result-container">

    <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th> 
            <th>Color</th>
            <th>Brand</th>
          </tr>
    {this.state.data.map(c => {
         return (
          <tr>
            <td><img class="result-images" src={require("./../images/caseSample.jpg").default}/></td>
            <td>{c.name}</td>
            <td>{c.type}</td>
            <td>{c.color}</td>
            <td>{c.brand}</td>
          </tr>
          )
        })}
        </table>
       </div>

       {/* filter box */}
    <div class="filter-container">
      <h3>Filters</h3>

      <h4>Case type</h4>
      <div class="filter-segments">
      {this.state.filterTypes.map((f)=>(
	        <React.Fragment>
		         <input type="checkbox" 
			        name="case"/>
              <span>{f}</span><br/>
	        </React.Fragment>
          ))}
        </div>

        <h4>Colors</h4>
        <div class="filter-segments">
      {this.state.filterColors.map((f)=>(
	        <React.Fragment>
		         <input type="checkbox" 
			        name="color"/>
              <span>{f}</span><br/>
	        </React.Fragment>
          ))}
        </div>

        <h4>Brands</h4>
        <div class="filter-segments">
      {this.state.filterBrands.map((f)=>(
	        <React.Fragment>
		         <input type="checkbox" 
			        name="brand"/>
              <span>{f}</span><br/>
	        </React.Fragment>
          ))}
        </div>

     </div>
</div>
     </React.Fragment>
   );
 }
}