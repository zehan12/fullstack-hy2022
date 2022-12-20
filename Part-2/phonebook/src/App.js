import { Fragment, useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
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

const PersonForm = ({ handleSubmit }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  <form>
    <div>
      name: <input type="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <br />
      number: <input type="number" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
    </div>
    <div>
      <button onClick={(e) => handleSubmit(newName, newNumber)} type="submit">add</button>
    </div>
  </form>
}

const PersonList = (persons) => {
  return (
    <Fragment>
      {
        persons.length &&
        persons.map((person) => (
          < h4 > name: {person.name } number:{person.number}</h4>))
      }
    </Fragment >
  )
}
