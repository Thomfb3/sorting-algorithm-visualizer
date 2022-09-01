import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BubbleSort } from "../sortingAlgorithms/bubbleSort";
import './SortingVisualizer.css';
import Bar from "./Bar.js";

const color1 = `red`;
const color2 = `rgb(177, 177, 248)`;
const color3 = `rgb(149, 246, 108)`;
const color4 = `green`;

function SortingVisualizer() {
    const [valueArray, setValueArray] = useState([])
    const BAR_WIDTH = 7;
    const NUM_OF_BARS = 50;
    const LOWER = 5;
    const UPPER = 500;
    const animationTime = 1;

    const generateNewArray = () => {
        const newArray = generateRandomArray();
        setValueArray([...newArray])
    }
    
    const generateRandomArray = () => {
        const randomArray = []
        for(let i = 1; i <= NUM_OF_BARS; i++) {
            randomArray.push(randomIntFromInterval(LOWER, UPPER))
        }
        return randomArray;
    }

    function changetoColor3(array, color) {
        for (let i = 0; i < array.length; i++) {
            const e = document.getElementById(i).style;
            e.backgroundColor = color;
        }
    }

    function enableButtons() {
        const btnarr = ["newArray", "merge", "bubble", "selection", "insertion", "quick"];
        for (let i = 0; i < btnarr.length; i++) {
            document.getElementById(btnarr[i]).disabled = false;
        }
    }


    function bubbleSort() {
        const animations = BubbleSort(valueArray);
        // console.log(animations);
        for (let i = 0; i < animations.length; i++) {
            let color = "";
            const [bar1, bar2] = animations[i];
            const bar1style = document.getElementById(bar1).style;
            const bar2style = document.getElementById(bar2).style;
            if (i % 3 === 0 || i % 3 === 2) {
                if (i % 3 === 0) {
                    color = color1;
                }
                if (i % 3 === 2) {
                    color = color2;
                }
                setTimeout(() => {
                    bar1style.backgroundColor = color;
                    bar2style.backgroundColor = color;
                }, animationTime * i);

            }
            else {

                setTimeout(() => {
                    let temp = bar1style.height;
                    bar1style.height = bar2style.height;
                    bar2style.height = temp;
                }, animationTime * i);
            }
        }
        setTimeout(() => {
            changetoColor3(valueArray, color3);
            enableButtons();
        }, animationTime * animations.length);
    }

    useEffect(() => {
      
    },[]);

    return (

        <div>

            <div className="Array-container">

                {valueArray.map((val, idx) => (
                    <li id={idx} key={uuidv4()} style={{backgroundColor: 'aquamarine', listStyle: "none", height: `${val}px`, width: `${BAR_WIDTH}px` }}></li>
                    // <Bar
                    //     key={uuidv4()}
                    //     id={idx}
                    //     width={BAR_WIDTH}
                    //     value={val}
                    // />
                ))}
            </div>

            <button onClick={generateNewArray}>Generate New Array</button>
            <button onClick={bubbleSort}>Bubble Sort</button>

        </div>
    )

}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




export default SortingVisualizer;