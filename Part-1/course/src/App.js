const Exmaple = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [ part1, part2, part3 ];
  const exercises = [ exercises1, exercises2, exercises3 ];
  return (
    <div>
      <Header course={course} />
      <Content  parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

const Header = ( props ) => <h1>{props.course}</h1>

const Total = ( props ) => <p>Number of exercise { props.exercises.reduce((acc,cv)=> acc+=cv,0) }</p>

const Content = ( props ) => {
  return <div>
    { props.parts.map((part,index)=>{
      return <Parts part={part} exercise={ props.exercises[index] }  /> 
    }) }
  </div>
}

const Parts = ( props ) => {
  return <div style={{display:"flex"}}>
  <p style={{marginRight:"7px"}}>{props.part}</p>
  <p>{props.exercise}</p>
  </div>
}

export default App
