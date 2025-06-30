import './app-info.css';

import {Component} from 'react'

class AppInfo extends Component {

 
    render () {

         const {employees, increased } = this.props;

       
        return (
                <div className="app-info">
                    <h1>Employees Filter in the company</h1>
                    <h2> Amount of Employees: {employees} </h2>
                    <h2> Monthly Bonus will get: {increased}</h2>
                </div>
            )
    }
    
  
   
   
}

export default AppInfo;