import React from "react";
import { useSelector } from "react-redux";

const Second = () => {
    const myState = useSelector((state) => state.newsChange);
    return (
        <>
            <h1>{myState}</h1>
        </>
    )
}
export default Second;