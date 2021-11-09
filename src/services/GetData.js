import axios from "axios"

const API_KEY= 'xkxVugQu5fndXqKET9U3WZO8RkUe7hvQA9aDwtvg-Qc'
// const BASE_URL='https://api.unsplash.com/photos'
// https://jsonplaceholder.typicode.com/todos/1

export const getData = async() => {
    try {
        const res = await axios.get(`/random?client_id=${API_KEY}&count=2`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}