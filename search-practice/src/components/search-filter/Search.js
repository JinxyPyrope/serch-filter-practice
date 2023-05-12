import React, { useState } from "react"

const Search = () => {
  const [searchInput, setSearchInput] = useState("")

  const fruits = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"]

  
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <table>
        
      </table>
    </div>
  )
}

export default Search
