import React from 'react'
import { Route } from 'react-router'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {searchterm, setSearchterm} = useGlobalContext()
  const inputRef = React.useRef("")
  // const edit = ;
  const handleChange = (e)=>{
    // e.preventDefault()
    setSearchterm(inputRef.current.value)
  }
  console.log(searchterm);
  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref= {inputRef}
            value={searchterm}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
