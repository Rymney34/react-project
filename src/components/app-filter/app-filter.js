import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all' ,label: 'All employees'},
        {name: 'rise' ,label: 'Sallary to rise'},
        {name: 'moreThen1000' ,label: 'Sallary over £1000'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn btn-outline-light'
        return (
             <button className={ `btn ${clazz}`} 
                    type="button"
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })
    return(
        <div className="btn-group">
            {buttons}
         
            

        </div>
    )
}

export default AppFilter