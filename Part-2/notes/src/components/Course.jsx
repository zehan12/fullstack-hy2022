import { Fragment } from "react"
import Header from "./Header"
import Content from "./Content"


const Course = ({ course }) => {
    console.log( Object.entries(course.parts),"kjdjf")
    let parts =  Object.entries(course.parts)
    return (
        <Fragment>
            <Header header={course.name} />
            <Content parts={parts} />
        </Fragment>
    )
}

export default Course;