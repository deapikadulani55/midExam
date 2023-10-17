import React, { Component } from 'react'

const sampleData = [

  { id: 1, name: 'John Doe', age: 25, city: 'New York', occupation: 'Engineer' },

  { id: 2, name: 'Jane Smith', age: 30, city: 'San Francisco', occupation: 'Designer' },

  { id: 3, name: 'Bob Johnson', age: 28, city: 'Chicago', occupation: 'Accountant' },

  { id: 4, name: 'Alice Brown', age: 35, city: 'Los Angeles', occupation: 'Teacher' },

  { id: 5, name: 'Charlie Wilson', age: 40, city: 'Houston', occupation: 'Doctor' },

  { id: 6, name: 'Eva Davis', age: 22, city: 'Miami', occupation: 'Artist' },

  { id: 7, name: 'Frank Miller', age: 32, city: 'Seattle', occupation: 'Software Engineer' },

  { id: 8, name: 'Grace Taylor', age: 45, city: 'Boston', occupation: 'Lawyer' },

  { id: 9, name: 'Henry Clark', age: 28, city: 'Denver', occupation: 'Marketing Manager' },

  { id: 10, name: 'Ivy Adams', age: 33, city: 'Atlanta', occupation: 'Entrepreneur' },

];


 class App extends Component {
  render() {
    return (
      <div>
        <form>
      <input name='name'  />
      <br />
      <input name='age'/>
      <br />
      

    

      <select name='country' onChange={this.handleChange}>
        <option >New York</option>
        <option >San Francisco</option>
        <option >Chicago</option>
        <option >Los Angeles</option>
        <option >Houston</option>
        <option >Miami</option>
        <option >Seattle</option>
        <option >Boston</option>
        <option >Denver</option>
        <option >Atlanta</option>

      </select>
      <br />
      <select name='occupation' onChange={this.handleChange}>
<option >Engineer</option>
<option >Designer</option>
<option >Accountant</option>
<option >Teacher</option>
<option >Doctor</option>
<option >Artist</option>
<option >Software Engineer</option>
<option >Lawyer</option>
<option >Marketing Manager</option>
<option >Entrepreneur</option>

</select>

 



        </form>

      </div>
    )
  }
}


export default App;
