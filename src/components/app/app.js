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
                {name: 'John C.' , salary: 800 , increase: true,  rise: true , id: 1},
                {name: 'Tim B. ' , salary: 3000, increase: false, rise: false, id: 2},
                {name: 'Alex A.' , salary: 1000, increase: false, rise: false, id: 3},
              
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

          
            const newItem = {name: name, salary: salary, increase: false, rise: false, id: id1+1};

             const newArr = [...data, newItem];
        
                return {
                    data: newArr
                }
            
           
         })
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({data}) => {
    //         // Meaningul and readble code 


    //         // const index = data.findIndex(elem => elem.id === id);
            
    //         // const old = data[index];

    //         // const newItem = {...old, increase: !old.increase}
    //         // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        

    //         // return {
    //         //     data: newArr
    //         // }
    //     // })
    //     this.setState(({data}) => ({
    //             data: data.map(item => {
    //                 if(item.id === id) {
    //                     return {...item, increase: !item.increase}
    //                 }
    //                 return item;
    //         })
    //     }))
           
        
    // }

    onToggleProp = (id, prop) => {
        
          this.setState(({data}) => ({
                data: data.map(item => {
                    if(item.id === id) {
                        return {...item, [prop]: !item[prop]}
                    }
                    return item;
            })
        }))
           
    }


 


  render () {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length

      return (
        <div className="app"> 
            <AppInfo employees = {employees} increased={increased}/>
            <div className='search-panel'>
                <SearchPanel/>
                <AppFilter/>
               
            </div>
             <EmployeesList 
             data = {this.state.data}
             onDelete={this.deleteItem}
             
             onToggleProp={this.onToggleProp}/>  
             {/* Passing this data to employeesForm js */}
             <EmployeesAddForm onAdd={this.onAdd}/>
        </div>
    )
  }
}

export default App;