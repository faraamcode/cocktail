import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [searchterm, setSearchterm] = useState("a")
  const [cocktail, setCocktails] = useState([])
  const [error, setError] = useState(false)

  useEffect(()=>{
  fetch(`${url}${searchterm}`)
  .then(response => response.json())
  .then(data => {
    if (!data) {
      
      return setCocktails([])
    }else{
      const newDrink = data.drinks.map((item)=> item)
      return setCocktails(newDrink)

    }
  })
  .catch(error => setError(true))
  }, [])

  useEffect(()=>{
  fetch(`${url}${searchterm}`)
  .then(response => response.json())
  .then(data => {
    const newDrink = data.drinks.map((item)=> item)
    // console.log();
    setCocktails(newDrink)
  })
  }, [searchterm])
  return <AppContext.Provider value={{cocktail,searchterm, setSearchterm, cocktail, setSearchterm,error}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
