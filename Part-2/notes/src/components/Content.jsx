import Parts from "./Parts";

const Content = ({ parts }) => (
    <div>
      {
        parts.map((part)=>(
          <Parts key={part.id} part={part} />
        ))
      }
    </div>
  )

export default Content;