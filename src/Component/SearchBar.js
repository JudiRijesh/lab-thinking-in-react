import React from 'react'

function SearchBar(props) {
    

     return (
    <div>
    <button onClick={props.sortByPrice} >Sort By Price</button>
    <button onClick={props.sortByName}>Sort by Name</button>
    

        
    </div>
  )
}

export default SearchBar