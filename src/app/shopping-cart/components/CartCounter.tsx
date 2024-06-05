'use client'
import React from 'react'
import { useState } from "react";


export const CartCounter = () => {

    const [counter, setCounter] = useState(0)

    const handleAddConter = () => {
        setCounter(counter + 1)
    }
    const handleResetConter = () => {
        setCounter(0)
    }
    const handleLessConter = () => {
        setCounter(counter - 1)
    }

    return (
        <section className=" flex flex-col justify-center items-center ">
            <span className="text-9xl"> {counter} </span>
            <div className="flex flex-row justify-center items-center gap-3 pt-5">
                <button className="bg-slate-900 text-white hover:bg-gray-500 transition-opacity p-2 rounded-md w-36 h-10" onClick={() => handleAddConter()}>
                    +1
                </button>
                <button className="bg-slate-900 text-white hover:bg-gray-500 transition-opacity p-2 rounded-md w-36 h-10" onClick={() => handleResetConter()}>
                    Reset
                </button>
                <button className="bg-slate-900 text-white hover:bg-gray-500 transition-opacity p-2 rounded-md w-36 h-10" onClick={() => handleLessConter()}>
                    -1
                </button>
            </div>
        </section>
    )
}
