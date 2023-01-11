import Multiselect from 'multiselect-react-dropdown'
import React, {useState} from 'react'
import './Styles/Range.css'

export default function Range({ min, max, isSelect, SelectValueBefore, SelectValueAfter, setValueBefore, setValueAfter, NameOfSelectValue, placeholder_from, placeholder_to }) {

  return (
    <div className='containerForRange'>
          { 
            isSelect
              ? <>
                  <p>{NameOfSelectValue} 
                    {
                      (min == 0 && max == Infinity) 
                        ?<span> (без ограничений)</span>
                          :<span> (от {min} до {max})</span> 
                    } 
                  </p>
                  <div className='Selection'>
                    <Multiselect className='Select' singleSelect = {true} placeholder={placeholder_from} isObject={false} options={SelectValueBefore} showCheckbox onSelect={(eventList, event )=>setValueBefore(event)} onRemove={(eventList, event )=>setValueBefore(event)} showArrow />
                    <Multiselect className='Select' singleSelect = {true} placeholder={placeholder_to} isObject={false} options={SelectValueAfter} showCheckbox onSelect={(eventList, event )=>setValueAfter(event)} onRemove={(eventList, event )=>setValueAfter(event)} showArrow />
                  </div>
                </>
                :<>
                  <p>{NameOfSelectValue} 
                    {
                      (min == 0 && max == Infinity) 
                        ?<span> (без ограничений)</span>
                          :<span> (от {min} до {max})</span> 
                    } 
                  </p>
                  <div className='Selection'>
                      <input type='number' 
                            min={min} max={max}
                            step={ (min === '1.0') ? 0.1 : 1 } 
                            className={`Select`} 
                            onChange={ e =>{
                                setValueBefore(e.target.value)
                            }} 
                            placeholder='от'/>
                      <input type='number' 
                            min={min} max={max} 
                            step={ (min === '1.0') ? 0.1 : 1 } 
                            className={`Select`} 
                            onChange={ e => setValueAfter(e.target.value) }  
                            placeholder='до'/>
                  </div>
                </>
            
          }
        </div>
  )
}
