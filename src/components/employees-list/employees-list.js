import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleProp}) => {


    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        
        return (
            
            <EmployeesListItem 
            name={itemProps.name}
             salary={itemProps.salary}
              key={id} {...itemProps}
              onDelete = {() => onDelete(id)}
              onToggleProp= {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
              />
              
            //{...item} could be used insted of the item.name item.salary
        )
        
    })
    return (
        <ul className="app-list list group">
            {elements}
        </ul>

    )
}

export default EmployeesList;
