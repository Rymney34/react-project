import './employees-add-form.scss'
import {Component} from 'react'


class EmployeesAddForm extends Component {
    
        
    state = {
        name: '',
        salary: ''
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
        if (!name.trim() || !salary.trim()){
            alert("Pleease fill two inputs (fields)")
        }
        else if(name.length < 3  || salary.length < 3) {
             alert("Inputs should be more then 3 char")
        }
        else{
             this.props.onAdd(name, salary);
        }
       
    }
    
    static onLog = () => {
        console.log('Gazoz')
    }

    static logged = 'on'
   

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

EmployeesAddForm.onLog()

console.log(EmployeesAddForm.logged);

export default EmployeesAddForm