import React from "react";
import Link from 'next/link';
import { useState } from 'react'
import { useCircularQueueStore } from "../../store/circularqueue_store";


const Circularqueue = () => {


    const { head, tail, enQueue, deQueue, size, array, storeCircularQueueSize, new_length } = useCircularQueueStore()

    const [circularQueueSize, setCircularQueueSize] = useState();
    const [number, setNumber] = useState("");
    const [isCircularQueueSizeInput, setIsCircularQueueSizeInput] = useState(false);
    const [isCreateCircularQueue, setIsCreateCircularQueue] = useState(true)
    const [isResetCircularQueue, setIsResetCircularQueue] = useState(true)
    const [isEnterItem, setIsEnterItem] = useState(false)
    const [isDequeueItem, setIsDequeueItem] = useState(true)
    const [isFlexView, setIsFlexView] = useState(false)


    const handleInputCircularQueueSize = (e) => {
        setCircularQueueSize(e.target.value)
        setIsCreateCircularQueue(false)
    }

    const createCircularQueue = () => {
        storeCircularQueueSize(circularQueueSize);
        setIsCircularQueueSizeInput(true)
        setIsCreateCircularQueue(true)
        setIsResetCircularQueue(false)
        setIsFlexView(true)
    }

    const handleInputChange = (e) => {
        setNumber(e.target.value)
    }

    const handleKeyDown = () => {
        if (event.keyCode === 13) {
            handleEnqueue()
        }
    }

    const handleKeyDownForSize = () => {
        if (event.keyCode === 13) {
            createCircularQueue()
        }
    }

    const isQueueFull = () => {
        ((head === ((tail) % size)) && (new_length() !== 0)) ? true : false
    }



    const handleEnqueue = () => {
        if (number) {
            if (isQueueFull()) {
                console.log("Queue is full")
            }
            enQueue(number)
            setNumber("")
            setIsDequeueItem(false)
            if (new_length() >= size) {
                setIsEnterItem(true)
            }
        }
    }

    const isQueueEmpty = () => {
        new_length() === 0 ? true : false
    }

    const handleDequeue = () => {
        if (isQueueEmpty()) {
            setIsDequeueItem(true)
        }
        else {
            deQueue()
            console.log("No of elements in array", length)
            if (new_length() === 0) {
                setIsDequeueItem(true)
            }
            if (new_length() < size) {
                setIsEnterItem(false)
            }
        }
    }

    const circularQueueview = [];
    for (let i = 0; i < size; i++) {
        circularQueueview.push(
            <div key={i} className="box-arrow">
                <span className="circularQueueItem">{array[i]}</span>
                <span className="arrow"></span>
            </div>
        )
    }


    const circularQueueContainer = () => {
        return (
            <div className="flex-container">
                <div className="flex-container1">
                    <input type="number" value={number} placeholder="Enter number" onChange={handleInputChange} onKeyDown={handleKeyDown} disabled={isEnterItem} />
                    <button onClick={handleEnqueue} disabled={isEnterItem}> Add to Queue</button>
                </div>
                <div className="flex-container2">
                    <div className="flex-container-cq">
                        {circularQueueview}
                    </div>
                    <div className="flex-container-cq2">
                        <button onClick={handleDequeue} disabled={isDequeueItem}> Remove from Queue</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1> DSA - Circular Queue</h1>
            <h2>
                <input type="number" className="sizeContainer"
                    placeholder="Enter queue size"
                    onChange={handleInputCircularQueueSize}
                    onKeyDown={handleKeyDownForSize}
                    disabled={isCircularQueueSizeInput}
                />
                <button className="sizeContainer" onClick={createCircularQueue} disabled={isCreateCircularQueue}> Create Circular Queue </button>
                <button className="sizeContainer" disabled={isResetCircularQueue}>Reset Stack</button>
            </h2>
            {isFlexView && circularQueueContainer()}
            <h5 className="footer"> <Link href='/'> &#8678; Back to home</Link></h5>
        </div>
    )
}

export default Circularqueue;