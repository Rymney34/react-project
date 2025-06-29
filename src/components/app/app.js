import './app.css'
import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
       data :[
                {name: 'John C.' , salary: 800 , increase: false, id: 1},
                {name: 'Tim B. ' , salary: 3000, increase: true, id: 2},
                {name: 'Alex A.' , salary: 1000, increase: false, id: 3},
              
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
// first option
            // const before = data.splice(0,index);
            // const after = data.splice(index + 1);

            // const newArr = [...before, ...after];
//    second option  
            const filtered = data.filter(item=> item.id !== id)

            console.log(index)
            return {
                data: filtered
            }
        })
           
    }

    // adding new employee into existing data array of objects

    onAdd = (name, salary,) => {
         this.setState(({data}) => {
             
        const [lastObject] = data.slice(-1);

        // If data is not empty, return the id of the last object
         const id1 = lastObject ? lastObject.id : null;

          
            const newItem = {name: name, salary: salary, increase: false, id: id1+1};

             const newArr = [...data, newItem];
        
                return {
                    data: newArr
                }
            
           
         })
    }

  render () {
      return (
        <div className="app"> 
        <AppInfo/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
               
            </div>
             <EmployeesList 
             data = {this.state.data}
             onDelete={this.deleteItem}/>  
             {/* Passing this data to employeesForm js */}
             <EmployeesAddForm onAdd={this.onAdd}/>
        </div>
    )
  }
}

export default App;