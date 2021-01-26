import React, { Component } from 'react'
import "./style.css"

class Table extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      employees: this.props.employees 
    }
  }
  
  renderTableData() {
    return this.props.employees.map((employees, index) => {
      const { id, name, age, email } = employees
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td style={{fontStyle: "italic"}}>{email}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    let header = Object.keys(this.props.employees[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render() {
    return (
      <div>
        <h1 id='title'>Employees</h1>
        <table className="table">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table