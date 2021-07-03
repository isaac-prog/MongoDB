import React from "react";
import axios from "axios";


export default class CasePage extends React.Component {
 url = "https://tgc-project2.herokuapp.com/";

 state = {
   data: [],
   filterTypes: [],
   filterColors: [],
   filterBrands: [],
   '_id': '',
   "page":"Case"
   
 };

 updateFormField = (event) => {
  this.setState({
      [event.target.name]: event.target.value,
  })
}

// updateCheckBox= (event) =>{
  
//   let currentValues= this.state[event.target.name];
//   let modifiedValues;
//   if (!currentValues.includes(event.target.value))
//   {
//       console.log('1',modifiedValues)
//       modifiedValues = [...currentValues, event.target.value];
//   }
//   else{
//       modifiedValues = currentValues.filter((element)=>{
//         console.log('2',element)
//           return element !== event.target.value;
//       })
//   }  
//   this.setState({
//       Case: modifiedValues
//   })
// }
checkTask = (name) => {
  let currentTask = this.state.data.filter(t => t.type === name);
  console.log(currentTask)
  let modifiedTask = { ...currentTask };
  modifiedTask.done = !currentTask.done;
  console.log(modifiedTask);
  console.log(currentTask)
  let modifiedTasksList = this.state.data.map(t => {
      if (t.type !== name) {
          console.log(t, "t")
          return t;
      } else {
          console.log(modifiedTask, "modified task")
          return modifiedTask;
      }
  })
  this.setState({
      'data': modifiedTasksList
  })
  
  console.log(this.state.data)
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
            <th>View/Edit/Delete</th>
          </tr>
    {this.state.data.map(c => {
         return (
          <tr>
            <td><img class="result-images" src={c.image}/></td>
            <td>{c.name}</td>
            <td>{c.type}</td>
            <td>{c.color}</td>
            <td>{c.brand}</td>
            <td>
            <button onClick={() => this.props.pageHandler("display", c._id)}> View</button>
            <button onClick={() => this.props.pageHandler("edit", c._id)}> Edit</button>
            <button onClick={() => this.deleteCase(c._id)}>Delete</button></td>
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
			        name="case"
              onChange={() => {
              this.checkTask(f.type)
                    }}
                    />
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

        <button onClick={{}}>Filter</button>
     </div>
    </div>
     </React.Fragment>
   );
 }
}