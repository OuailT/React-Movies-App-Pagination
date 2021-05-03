import React from 'react';
import Select from 'react-select';

import './CategoriesFilter.css';


const CategoriesFilter = ({categories, filterMovie}) => {
    const options = categories.map((c) => ({ value: c, label: c }));
    
    return (
    <div>  
    <Select
    className="select-option"
    options={options}
    placeholder={"Search by category"}
    onChange={filterMovie}
    />
    </div>
      
    )
}

export default CategoriesFilter;
