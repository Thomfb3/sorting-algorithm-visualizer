import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import './SortingVisualizer.css';
import bubbleSortAnimation from "../sortingAlgorithms/sortingAlgorithms.js";
import Bar from "./Bar.js";

function SortingVisualizer() {
    const [array, setArray] = useState([])
    
    const LOWER = 5;
    const UPPER = 1000;
    const NUM_OF_BARS = 25;
    const BAR_WIDTH = 10;

    const generateRandomArray = () => {
        const startArray = [];
        for (let i = 0; i < NUM_OF_BARS; i++) {
            startArray.push(randomIntFromInterval(LOWER, UPPER));
        }
        return startArray;
    }

    const generateNewArray = () => {
        const newArray = generateRandomArray();
        setArray([...newArray])
    }



    
    useEffect(() => {
        const startArray = generateRandomArray();
        setArray([...startArray]);
    }, []);

    return (
        <div>
            <div className="Array-container">
                {array.map((value, idx) => (
                    <Bar
                        key={uuidv4()}
                        idx={idx}
                        width={BAR_WIDTH}
                        value={value}
                    />
                ))}
            </div>
            <button onClick={generateNewArray}>Generate New Array</button>
            <button onClick={null}>Bubble Sort</button>
        </div>
    )

}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




export default SortingVisualizer;