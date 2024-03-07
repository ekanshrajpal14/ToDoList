"use client";

import { createContext, useContext, useState } from "react";
export const Centralizeddata = createContext(null);
const Contextapi = (props) => {
    // console.log(props);
    // const [central, setcentral] = useState([]);
    const [Donetask, setDonetask] = useState([]);


    return (
        <Centralizeddata.Provider value={[Donetask, setDonetask]}>{props.children}</Centralizeddata.Provider>
    )
}

export default Contextapi;