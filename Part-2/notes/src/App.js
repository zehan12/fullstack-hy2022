import { Fragment } from "react"

const Part = ({part}) => (<p> {part.name} {part.exercises} </p>)

const Content = ({ parts }) => (
  <div>
    {
      parts.map((part)=>(
        <Part key={part.id} part={part} />
      ))
    }
  </div>
)

const Header = ({ heading }) => <h1>{heading}</h1>

const Total = ({ parts }) => (
  <p>
    <strong>
      total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises
    </strong>
  </p>
)

const Course = ({ course }) => {
  return (
    <Fragment>
      <Header heading={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </Fragment>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App