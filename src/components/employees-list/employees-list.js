import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css'

const EmployeesList = ({data}) => {


    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem name={itemProps.name} salary={itemProps.salary} key={id} {...itemProps}/>
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
