import React from "react"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = [ part1, part2, part3 ];
  const exercises = [ exercises1, exercises2, exercises3 ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises}  />
    </div>
  )
}


const Header = ( props ) => ( <h1>{props.course}</h1> )

const Content = ( props ) => {
  return <>
    {props.parts.map((ele,i)=>{
      return <div style={{display:"flex"}}>
        <p>{ele}</p>
        <p>{props.exercises[i]}</p>
      </div>
    })}
  </>
}

const Total = ( props ) => {
  return <>
    <p>Number of exercises { props.exercises.reduce((acc,cv)=>acc+=cv,0) }</p>
  </>
}

// {
//   <div>
//   <h1>{course}</h1>
//   <p>
//     {part1} {exercises1}
//   </p>
//   <p>
//     {part2} {exercises2}
//   </p>
//   <p>
//     {part3} {exercises3}
//   </p>
//   <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
// </div>
// }


export default App