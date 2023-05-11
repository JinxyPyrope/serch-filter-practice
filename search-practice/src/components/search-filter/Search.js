import React, { useState } from "react"

const Search = () => {
  const [searchInput, setSearchInput] = useState("")

  // const fruits = ["Banana",  "Apple", "Orange", "Mango", "Pineapple", "Watermelon"]

  const fruits = [
    { id: 1, item: "Banana" },
    { id: 2, item: "Apple" },
    { id: 3, item: "Orange" },
    { id: 4, item: "Mango" },
    { id: 5, item: "Pineapple" },
    { id: 6, item: "Watermelon" }
  ]

  const handleChange = e => {
    e.preventDefault()
    setSearchInput(e.target.value)
    if (searchInput.length > 0) {
      fruits.filter(fruit => {
        return fruit.item.match(searchInput)
      })
    }
  }
  console.log(searchInput)

  return (
    <div>
      <input type="text" placeholder="Testing Here" onChange={handleChange} value={searchInput} />
      <table>
        {fruits.map(fruit => (
          <tr key={fruit.id}>
            <td>{fruit.fruit}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Search
