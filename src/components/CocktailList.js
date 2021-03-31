import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktail, error} = useGlobalContext()
  if(cocktail.length < 1){
    return (
      <h1>No drink found</h1>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
      {cocktail.map((item)=>{
        return <Cocktail key = {item.idDrink}{...item}/>
      })}
      </div>
    </section>
  )
}

export default CocktailList
