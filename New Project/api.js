import axios from "axios";

export const sendQuery = async(query) => {
    const response = await axios.post("http://localhost:5000/query", {
        query
    });
    return response.data;
};