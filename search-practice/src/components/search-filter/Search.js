import React, { useState } from "react"

const Search = () => {
  const [searchInput, setSearchInput] = useState("")

  // const fruits = ["Banana",  "Apple", "Orange", "Mango", "Pineapple", "Watermelon"]

  const fruits = [
    {id: 1, fruit: "Banana"},
    {id: 2, fruit: "Apple"},
    {id: 3, fruit: "Orange"},
    {id: 4, fruit: "Mango"},
    {id: 5, fruit: "Pineapple"},
    {id: 6, fruit: "Watermelon"},
  ]

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
  console.log(searchInput)

  return (
    <div>
      <input type="text" placeholder="Testing Here" onChange={handleChange} value={searchInput} />
      <table>
        {fruits.map((fruit, index) => (
          <tr key={index}>
            <td>{fruit}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Search
