import React, {createRef, useRef, useState} from 'react'
import Multiselect from 'multiselect-react-dropdown'
import './Styles/Selection.css'



export default function Selection({ choiceValues, isMultySelector, FetchModels, setValue, NameOfSelectValue, placeholder, MakeRef, ModelRef}) {

  const [MakeSelected, setMakeSelected] = useState('')

  return (
    <div className='containerForSelect'>
      {
        isMultySelector
          ? 
          <>
              <p>{NameOfSelectValue}</p>
              <Multiselect hidePlaceholder={true}
              displayValue='123'
              className='Multy' placeholder={placeholder} isObject={false} options={choiceValues} showCheckbox onSelect={(event)=>setValue(event)} onRemove={(event)=>setValue(event)} showArrow />
          </>
          : 
          <>
              <p>{NameOfSelectValue}</p>
              <Multiselect 
                           className='Multy'
                           disable={(choiceValues.length === 0)?true:false} 
                           singleSelect = {true} 
                           placeholder={placeholder} 
                           isObject={false} 
                           options={choiceValues} 
                           showCheckbox
                           ref={(NameOfSelectValue === 'Марка') ? MakeRef : ModelRef}
                           onSelect={( event, selectedItem)=>{
                            
                            setValue(selectedItem.split(' ').join('_'));
                              if(NameOfSelectValue === 'Марка'){ 
                                FetchModels(selectedItem)
                              }
                            }} 

                            onRemove={(event, selectedItem)=>{
                              setValue(selectedItem.split(' ').join('_'))
                              if(NameOfSelectValue === 'Марка'){  
                                FetchModels('')
                              }
                            }}
                            showArrow /> 
          </>
      //   isMultySelector
      //     ? <>
      //         <p>{NameOfSelectValue}</p>
      //         <Multiselect className='Multy' placeholder={placeholder} isObject={false} options={choiceValues} showCheckbox onSelect={(event)=>setValue(event)} onRemove={(event)=>setValue(event)} showArrow />
      //       </>
      //       :<>
      //         <p>{NameOfSelectValue}</p>
      //           <div className='multySelect'>
      //           <div className={`List ${isOpenList}`}>
      //             <h5>
      //               {
      //                 (SelectedArray.viewName == undefined)
      //                   ? <></>
      //                     : <>{SelectedArray.viewName}</>
      //               }
      //             </h5>
      //           </div>
      //           <small className={`${isOpenDirection}`}>
      //               { 
      //                 (NameOfSelectValue == 'Марка')
      //                   ? 'Выберите марку'
      //                     : (NameOfSelectValue == 'Модель')
      //                       ? 'Выберите модель'
      //                         : 'Выберите пробег'
      //               }
      //             </small>
      //             <button className={`button ${rotate}`}
      //                   disabled = {(choiceValues.length == 0)?true:false}
      //                   onClick={ async ()=>{
      //                     if(openState === 'close'){
      //                       setOpenState('open');
      //                       setRotate('rotate')
      //                     } else {
      //                       setOpenState('close');
      //                       setRotate('')
      //                     } 
      //                 }}>&#11167;</button>
      //           </div>

      //         <div className={`Option ${openState}`}>
      //               {
      //                 choiceValues.map(item=>(
      //                   <p className='optionType'
      //                      key={item.id}
      //                      onClick={()=>{
      //                       // setIdDisabled(false) is not a function??? 
      //                       if(item.id == -1){
      //                         setValue('')
      //                         setSelectedArray([])
      //                         setIsOpenList('close')
      //                         setIsOpenDirection('open')
      //                       } else {
      //                         setValue(item.viewName)
      //                         setSelectedArray(item)
      //                         setIsOpenList('open')
      //                         setIsOpenDirection('close')
      //                         if(NameOfSelectValue == 'Марка'){
      //                           FetchModels(item.id)
      //                         }
      //                       }
      //                       setOpenState('close')
      //                       setRotate('')
      //                      }}>
      //                     {item.viewName || item.value}
      //                     </p>
      //                 ))
      //               }
      //         </div> 
      //       </>
      }
    </div>
  )
}
