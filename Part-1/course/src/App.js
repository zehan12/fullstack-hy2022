const Example = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
}


const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

const Header = ( props ) => <h1>{props.course}</h1>

const Total = ( props ) => <p>Number of exercise { props.part1.exercises + props.part2.exercises + props.part2.exercises }</p>

const Content = ( props ) => {
  return <div>
    <Parts name={props.part1.name} exercise={props.part1.exercises}  />
    <Parts name={props.part2.name} exercise={props.part2.exercises}  />
    <Parts name={props.part3.name} exercise={props.part3.exercises}  />
  </div>
}

const Parts = ( props ) => {
  return <div style={{display:"flex"}}>
  <p style={{marginRight:"7px"}}>{props.name}</p>
  <p>{props.exercise}</p>
  </div>
}

export default App
