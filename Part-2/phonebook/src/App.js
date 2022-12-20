import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' }])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.map((v) => v.name.toLowerCase()).includes(newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons([...persons, { name: newName, number: newNumber }]);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input type="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <br />
          number: <input type="number" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button onClick={(e) => handleSubmit(e)} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person) => <h2>{person.name} {person.number} </h2>)
      }
      ...
    </div>
  )

}

export default App