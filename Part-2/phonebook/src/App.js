import { Fragment, useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

const App = () => {
  const [persons, setPersons] = useState([])
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

  const getPerson = async ( ) => {
    const { data } = await axios.get("http://localhost:3001/persons");
    return setPersons(data)
  }

  useEffect(()=>{
    getPerson()
  },[])

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
        persons.map((person) => <h2 key={person.name}>{person.name} {person.number} </h2>)
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
