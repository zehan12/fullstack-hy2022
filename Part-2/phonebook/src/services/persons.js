import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllPerson = async () => {
    const { data } = await axios.get("http://localhost:3001/persons");
    return data
}


export { getAllPerson  }