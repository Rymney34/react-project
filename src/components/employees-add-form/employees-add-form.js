import './emploees-add-form.css'
import {Component} from 'react'


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
// Passing data to onAdd to the array when button add is pressed 
     onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;
        this.props.onAdd(name, salary);
    }
   
   render () {
    const {name, salary} = this.state
    

     return (
        <div className="app-add-form">
            <h3>Add new employee</h3>
            <form className="add-form d-flex" onSubmit={this.onSubmit}>
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