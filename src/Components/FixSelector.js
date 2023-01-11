import React, {useState} from 'react'
import './Styles/FixSelector.css'

export default function FixSelector({ choiceValues, setValue, NameOfSelectValue}) {

    const [isActive, setIsActive] = useState([])
    const [idBtn, setIdBtn] = useState(Number)

  return (
      <div className='containerForFixSelector'>
        <p>{NameOfSelectValue}</p>
          <div className='BTNS'>
            {
                choiceValues.map((item)=>(
                    <button onClick={()=>{
                              setIdBtn(item.value)
                              setValue(item.label.split(' ').join('_'))
                            }} 
                            className={ (idBtn === item.value) ? 'true' : '' } 
                            key={item.value}>{item.label}</button>
                ))
            }
          </div>
      </div>
  )
}
