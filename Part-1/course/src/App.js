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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total exercise={course.parts} />
    </div>
  )
}

const Header = ( props ) => <h1>{props.course}</h1>

const Total = ( props ) => <p>Number of exercise { props.exercise.reduce((acc,cv)=>acc+=cv.exercises,0) }</p>

const Content = ( props ) => {
  return <div>
    <Parts name={props.part[0].name} exercise={props.part[0].exercises} />
    <Parts name={props.part[1].name} exercise={props.part[1].exercises} />
    <Parts name={props.part[2].name} exercise={props.part[2].exercises} />
  </div>
}

const Parts = ( props ) => {
  return <div style={{display:"flex"}}>
  <p style={{marginRight:"7px"}}>{props.name}</p>
  <p>{props.exercise}</p>
  </div>
}

export default App
