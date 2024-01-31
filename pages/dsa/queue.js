import React from "react"
import Link from "next/link"
import { useState } from "react";
import { useQueueStore } from "./queue_store";

export default function Queue() {

    const { size, array, storeQueueSize, enQueue, resetArray, dequeue } = useQueueStore();

    const [number, setNumber] = useState(null);
    const [queueSize, setQueueSize] = useState();
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [isPopDisabled, setIsPopDisabled] = useState(true)
    const [isFlexView, setIsFlexView] = useState(false)
    const [isQueueNew, setIsQueueNew] = useState(true)
    const [isResetQueue, setisResetQueue] = useState(true)
    const [isQueueInput, setisQueueInput] = useState(false)

    const handleInputQueueSize = (e) => {
        setQueueSize(e.target.value)
        setIsQueueNew(false)
    }

    const createQueue = () => {
        storeQueueSize(queueSize)
        setIsFlexView(true)
        setIsQueueNew(true)
        setisResetQueue(false)
        setisQueueInput(true)
        console.log("size" + queueSize)
    }

    const handleInputChange = (e) => {
        console.log("value" + e.target.value)
        setNumber(e.target.value)

    }

    const handleClick = () => {
        if (number) {
            enQueue(number)
            setNumber("")
            setIsPopDisabled(false)
            console.log(array.length)
            if (array.length >= queueSize) {
                setIsInputDisabled(true)
                console.log(isInputDisabled)
            }
        }
    }

    const handleDequeue = () => {
        dequeue();
        if (array.length === 0) {
            setIsPopDisabled(true)
        }
        setIsInputDisabled(false)
    }

    const handleReset = () => {
        resetArray();
        console.log(array)
        setIsFlexView(false)
        setIsQueueNew(false)
        setisResetQueue(true)
        setisQueueInput(false)
        setIsInputDisabled(false)
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleClick();
        }
    }

    const handleQueueClick = (event) => {
        if (event.keyCode === 13) {
            createQueue();
        }
    }

    const queueView = [];
    for (let idx = 0; idx < size; idx++) {
        console.log("test view")
        queueView.push(<div key={idx} className='stackItem'> {array[idx]}</div>)
    }

    const queueContainer = () => {
        return (
            <div className='flex-container'>
                <div className='flex-container1'>
                    <input type="number" value={number}
                        placeholder="Enter number"
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        disabled={isInputDisabled} />
                    <button onClick={handleClick} disabled={isInputDisabled}> Add to Queue </button>
                </div>
                <div className="flex-container2">
                    <div className='column-container'>
                        {queueView}
                    </div>
                    <div className='column-container'>
                        <button onClick={handleDequeue} disabled={isPopDisabled}> Remove from Queue </button>
                        {/* <div className='PopResult'>Last popped item: {(array.length === 0 ? "" : pop_result)}</div> */}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1> DSA- Queue</h1>
            <h2>
                <input type="number" className="sizeContainer"
                    placeholder="Enter queue size"
                    onChange={handleInputQueueSize}
                    onKeyDown={handleQueueClick}
                    disabled={isQueueInput} />
                <button className="sizeContainer" onClick={createQueue} disabled={isQueueNew}> Display Queue </button>
                <button className="sizeContainer" onClick={handleReset} disabled={isResetQueue}>Reset Queue</button>
            </h2>
            {isFlexView && queueContainer()}
            <h5 className="footer"> <Link href='/'> &#8678; Back to home</Link></h5>
        </div>

    )
}