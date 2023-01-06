import React from 'react'
import { useContext } from 'react';
import { ListContext } from '../../contexts/ListContext';
import List from '../List'

const TechnogiesList = () => {

  const { list } = useContext(ListContext);
  
 
  return (
    <ul>
     
      {

        list.map((elemento) =>{ return <List key={elemento.id} elemento={elemento}/>})
      }

    </ul>
  )
}

export default TechnogiesList