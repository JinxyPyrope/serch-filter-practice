import React, { useState } from "react"

const Search = () => {
  const [searchInput, setSearchInput] = useState("")

  const fruits = [
    { id: 0, fruit: "Banana" },
    { id: 1, fruit: "Apple" },
    { id: 2, fruit: "Orange" },
    { id: 3, fruit: "Mango" },
    { id: 4, fruit: "Pineapple" },
    { id: 5, fruit: "Watermelon" }
  ]

  const handleChange = e => {
    e.preventDefault()
    setSearchInput(e.target.value)
    if (searchInput.length > 0) {
      fruits.filter(fruit => {
        return fruit.name.match(searchInput)
      })
    }
  }

  return (
    <div>
      <input type="text" placeholder="Testing Here" onChange={handleChange} value={searchInput} />
      
    </div>
  )
}

export default Search
