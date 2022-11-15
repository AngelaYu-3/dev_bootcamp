import React from "react";
import { useState, useEffect } from "react";

const allFacts = [];
let page = 0;

function updatePageNum() {
    page += 1;
}

const CatFactsHist = (props) => {
    const { data } = props;
    allFacts.push(data);

    const tenFacts = allFacts.map((num, index) => {
        
        if (((index + (page * 20)) < (20 + (page * 20))) && index % 2 == 0) {
            return <li>{num}</li>
        }
    });

    return (
        <div className= "container">
            {tenFacts}
            <div style={{paddingTop: "100px"}}>
            <button style={{width: "100px", alignContent: "middle", height: "100px"}} onClick = {updatePageNum()}>Next Ten</button>
            </div>
        </div>
    );
}

export default CatFactsHist;