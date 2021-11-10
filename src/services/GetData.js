import axios from "axios"

const API_KEY= 'xkxVugQu5fndXqKET9U3WZO8RkUe7hvQA9aDwtvg-Qc'

export const getData = async() => {
    try {
        const res = await axios.get(`/random?client_id=${API_KEY}&count=10&orientation=portrait`)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}