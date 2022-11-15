import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import CatFactsHistory from "./CatFactsHist";

function PageButton() {

    return (
        <div className= "container">
            <div style={{paddingTop: "300px"}}>
            <button style={{width: "100px", alignContent: "middle", height: "100px"}}>Next Ten</button>
            
            </div>
        </div>
    );
}

export default PageButton;