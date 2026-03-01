import React, { useState } from "react";
import { sendQuery } from "./api";
import ResultTable from "./components/ResultTable";

function App() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = async() => {
        const result = await sendQuery(query);
        setData(result.data);
    };

    return ( <
        div style = {
            { padding: "20px" } } >
        <
        h1 > Natural Language MongoDB Query < /h1> <
        input type = "text"
        value = { query }
        onChange = {
            (e) => setQuery(e.target.value) }
        placeholder = "Enter your query..."
        style = {
            { width: "400px" } }
        /> <
        button onClick = { handleSubmit } > Submit < /button>

        <
        ResultTable data = { data }
        /> <
        /div>
    );
}

export default App;