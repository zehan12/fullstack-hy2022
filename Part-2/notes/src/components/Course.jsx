import Total from "./Total";
import Content from "./Content";
const Course = ({ course }) => {
    return (
      <Fragment>
        <Header heading={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </Fragment>
    )
}

export default Course;