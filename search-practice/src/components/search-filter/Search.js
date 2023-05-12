import React, { useState } from "react"

const Search = () => {
  const [searchInput, setSearchInput] = useState("")

  // const fruits = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"]

  const fruits = [
    { id: 1, fruit: "Banana" },
    { id: 2, fruit: "Apple" },
    { id: 3, fruit: "Orange" },
    { id: 4, fruit: "Mango" },
    { id: 5, fruit: "Pineapple" },
    { id: 6, fruit: "Watermelon" }
  ]

  return (
    <div>
      <input type="text" placeholder="Search..." />
      {fruits.map(item => {
        return <div> {item.fruit}</div>
      })}
    </div>
  )
}

export default Search
