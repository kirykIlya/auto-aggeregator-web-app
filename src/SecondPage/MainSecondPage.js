import React, {useEffect, useState} from 'react'
import Sorting from './Sorting'
import Ads from './Ads'
import Loading from 'react-loading'
import { SortingOnDate } from '../StaticDATA/LISTS.js'
import { SortingOnTime } from '../StaticDATA/LISTS.js'
import './Styles/MainSecondPage.css'

export default function MainSecondPage({Data, isLoading}) {

  const getValues = (objectList)=>{
    return objectList.map(a => a.value)
  }

  return (
              <div className='containerForSecondPage'>
                <h1>Объявления</h1>
                  <Sorting SortName={'Сортировка'} placeholder={'По дате размещения'} Options={getValues(SortingOnDate)}/>
                  <Sorting SortName={'Время размещения'} placeholder={'За неделю'} Options={getValues(SortingOnTime)} />
                  {
                    isLoading
                      ? <Loading type='spokes' color={'black'} height={'50px'} width={'50px'} padding={'20px'}/>
                        : <Ads Data={Data}/>
                  }
              </div>
     
    
  )
}
