const Total = ({ parts }) => (
    <p>
      <strong>
        total of {parts.reduce((a, b) => a + b.exercises, 0)} exercises
      </strong>
    </p>
  )

  export default Total