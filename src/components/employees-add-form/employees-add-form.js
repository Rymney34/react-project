import './emploees-add-form.css'
import {Component} from 'react'

import {EmployeesListItem} from "../employees-list-item/employees-list-item.js"

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChannge = (e) => {
        this.setState ({
        [e.target.name] : e.target.value
        })
    }

   
   render () {
    const {name, salary} = this.state
     return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form className="add-form d-flex">
                <input 
                name="name" value = {name}
                type="text" className="form-control new-post-label" placeholder="What is his name?"onChange={this.onValueChannge}/>
                <input 
                name="salary"
                value = {salary}
                type="number" className="form-control new-post-label" placeholder="Salary in £"    onChange={this.onValueChannge}/>
                <button type="submit" className="btn btn-outline-light"> Add</button>
            </form>
        </div>
    )
   }
}

export default EmployeesAddForm