import React from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

function pagination({ next, prev, page }) {
    return (
        <div className="m-5">
            <button className="btn btn-outline-primary" onClick={() => prev()} disabled={page === "1"} >
                <BsChevronDoubleLeft/> Prev
            </button>
            <text className="h4 text-primary"> ...{page}... </text>
            <button className="btn btn-outline-primary" onClick={() => next()}>
               <BsChevronDoubleRight/> Next
            </button>
        </div>
    )
}

export default pagination
