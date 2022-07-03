import React from "react"


const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
  )
}

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }


const App = () => {
  const name = 'Zehan'
  const age = 23
  return [
      <h1>Greetings</h1>,
      <Hello age={age} name={name} />,
      <Hello age={age+1} name="Vasant" />,
      <Hello age={age+3} name="Anand" />,
      <Hello age={age+4} name="Vivek" />,
      <Hello age={age+3} name="Baljeet" />,
      <Footer />
    ]
}


// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//       <Footer />
//     </>
//   )
// }

export default App