import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')
  const handleChange = ({ target }) => {
    let { name, value } = target;
    setNewName(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newName, persons)
    if (persons.map((v) => v.name.toLowerCase()).includes(newName.toLowerCase())) {
       alert(`${newName} is already added to phonebook`)
       return
    }
    setPersons([...persons, { name: newName }]);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input type="name" value={newName} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <button onClick={(e) => handleSubmit(e)} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => <h2>{person.name}</h2>)
      }
      ...
    </div>
  )

}

export default App