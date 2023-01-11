import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown'
import './Styles/Sorting.css'
export default function Sorting({ SortName, TypeOfSorting, Options, placeholder }) {


  return (
    <div className='containerForSorting'>
        <p className='head'>{SortName}</p>
        <Multiselect
              hidePlaceholder={true}
              className='Multy' 
              singleSelect = {true} 
              placeholder={placeholder} 
              isObject={false} 
              options={Options} 
              showCheckbox 
              onSelect={(event)=>console.log(event)} 
              onRemove={(event)=>console.log(event)} 
              showArrow />
        
    </div>
  )
}
