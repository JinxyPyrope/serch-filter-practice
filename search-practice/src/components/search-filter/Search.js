import React, { useState } from "react"

const Search = () => {
  const [searchInput, setSearchInput] = useState("")

  const fruits = ["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"]

  const handleChange = e => {
    e.preventDefault()
    setSearchInput(e.target.value)
    console.log(searchInput)
    if (searchInput.length > 0) {
      fruits.filter(fruit => {
        return fruit.match(searchInput)
      })
    }
  }

  return (
    <div>
      <input type="text" placeholder="Testing Here" onChange={handleChange} value={searchInput} />
      <table>
        {fruits.map(fruit => (
          <tr>
            <td>{fruit}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Search
