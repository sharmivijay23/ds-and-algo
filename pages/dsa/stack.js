import Link from 'next/link';
import React, { useState } from "react"
import { useStackStore } from "../../store/store"


const Stack = () => {

    console.log("rendering")

    const { size, storeStackSize, resetArray, pop_result, popItem, array, storeValue } = useStackStore();

    const [number, setNumber] = useState("");
    const [stackSize, setStackSize] = useState();
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [isPopDisabled, setIsPopDisabled] = useState(true)
    const [isFlexView, setIsFlexView] = useState(false)
    const [isCreateStackNew, setIsCreateStackNew] = useState(true)
    const [isResetStack, setIsResetStack] = useState(true)
    const [isStackSizeInput, setIsStackSizeInput] = useState(false)

    const handleInputStackSize = (e) => {
        setStackSize(e.target.value)
        setIsCreateStackNew(false)
    }

    const createStack = () => {
        storeStackSize(stackSize)
        setIsFlexView(true)
        setIsCreateStackNew(true)
        setIsResetStack(false)
        setIsStackSizeInput(true)
        console.log("size" + stackSize)
    }

    const handleInputChange = (e) => {
        console.log("value" + e.target.value)
        setNumber(e.target.value)
    }

    const handleClick = () => {
        if (number) {
            storeValue(number)
            setNumber("")
            setIsPopDisabled(false)
            console.log(array.length)
            if (array.length >= stackSize) {
                setIsInputDisabled(true)
                console.log(isInputDisabled)
            }
        }
    }

    const handlePop = () => {
        popItem()
        if (array.length === 0) {
            setIsPopDisabled(true)
        }
        setIsInputDisabled(false)
    }

    const handleReset = () => {
        resetArray();
        console.log(array)
        setIsFlexView(false)
        setIsCreateStackNew(false)
        setIsResetStack(true)
        setIsStackSizeInput(false)
        setIsInputDisabled(false)
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleClick();
        }
    }

    const handleStackClick = (event) => {
        if (event.keyCode === 13) {
            createStack();
        }
    }

    const stackView = [];
    for (let idx = 0; idx < size; idx++) {
        console.log("test view")
        stackView.push(<div key={idx} className='stackItem'> {array[idx]}</div>)
    }

    const stackContainer = () => {
        return (
            <div className='flex-container'>
                <div className='flex-container1'>
                    <input type="number" value={number}
                        placeholder="Enter number"
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        disabled={isInputDisabled} />
                    <button onClick={handleClick} disabled={isInputDisabled}> Push </button>
                </div>
                <div className="flex-container2">
                    <div className='column-container'>
                        {stackView}
                    </div>
                    <div className='column-container'>
                        <button onClick={handlePop} disabled={isPopDisabled}> Pop </button>
                        <div className='PopResult'>Last popped item: {(array.length === 0 ? "" : pop_result)}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1> DSA - Stack</h1>
            <h2>
                <input type="number" className="sizeContainer"
                    placeholder="Enter stack size"
                    onChange={handleInputStackSize}
                    onKeyDown={handleStackClick}
                    disabled={isStackSizeInput} />
                <button className="sizeContainer" onClick={createStack} disabled={isCreateStackNew}> Create Stack </button>
                <button className="sizeContainer" onClick={handleReset} disabled={isResetStack}>Reset Stack</button>
            </h2>
            {isFlexView && stackContainer()}
            <h5 className="footer"> <Link href='/'> &#8678; Back to home</Link></h5>
        </div>
    )
}

export default Stack;

