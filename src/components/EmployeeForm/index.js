import React, { Component } from 'react'

class EmployeeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
      age: "",
      email: "",
      department: ""
    }

    this.idChange = this.idChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.departmentChange = this.departmentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  idChange(e) {
    this.setState({ id: e.target.value });
  }

  nameChange(e) {
    this.setState({ name: e.target.value });
  }

  ageChange(e) {
    this.setState({ age: e.target.value });
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  departmentChange(e) {
    this.setState({ department: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setTableInput(this.state);
    this.state = this.setState({
      id: "",
      name: "",
      age: "",
      email: "",
      department: ""
    })
    alert("New Employee Added!")
  }

  render() {
    return (
      <div>
        <h3>Add a new employee</h3>
        <form>
          <div>
            <input type="text" onChange={this.idChange} value={this.state.id} placeholder="ID"></input>
            <br/>
            <input type="text" onChange={this.nameChange} value={this.state.name} placeholder="Name"></input>
            <br/>
            <input type="text" onChange={this.ageChange} value={this.state.age} placeholder="Age"></input>
            <br/>
            <input type="text" onChange={this.emailChange} value={this.state.email} placeholder="Email"></input>
            <br/>
            <input type="text" onChange={this.departmentChange} value={this.state.department} placeholder="Department"></input>
            <br/>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default EmployeeForm;