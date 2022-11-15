import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import CatFactsHistory from "./CatFactsHist";
import { useState, useEffect } from "react";

function CatFacts() {
    const [facts, setFacts] = useState([]);
    const allFacts = [];
    const fetchData = async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        setFacts(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className= "container">
            <div style={{paddingTop: "100px"}}>
                <button style={{width: "300px", alignContent: "middle", height: "100px"}} onClick={fetchData}>Give me a fact</button>
            </div>
            <p style={{fontWeight: "bold"}}> {facts.fact} </p>
            
            <CatFactsHistory data={facts.fact} />
        </div>
    );
}

export default CatFacts;