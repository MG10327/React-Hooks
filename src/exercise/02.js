// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  window.localStorage.getItem('name')
  console.log(window.localStorage.getItem('name'))

  const [name, setName] = React.useState(window.localStorage.getItem('name') ?? initialName) // Grab the name value and if there isn't one then grab what the initial name value was

React.useEffect (() => {
 window.localStorage.setItem('name', name) // key on the left, value on the right. This creates an object in the local storage.
})

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
