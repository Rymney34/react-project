import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = ({data}) => {


    const elements = data.map(item => {
        return (
            <EmployeesListItem name={item.name} salary={item.salary} {...item}/>
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
