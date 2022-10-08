import Parts from "./Parts";

const Content = ( {parts} ) => {
    return(
        {
            parts.map((part)=><Parts name={part.name} exercises={part.exercises}/>)
        }
    )
}

export default Content;