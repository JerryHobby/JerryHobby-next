'use client';
import React from 'react';
import './index';
import styles from './snake_game.module.css';
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa';

let btnClass = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 mx-5 my-0 border border-blue-500 hover:border-transparent rounded"

export default function Snake() {
    let globalScope: any = typeof window !== 'undefined' ? window : {};
    return (
        <main>
            <div id="snake-game" className={styles['content-wrapper']}>
                <h2 className="text-2xl font-bold text-blue-500 m-5">Jerry&apos;s WASM/Rust Snake Game</h2>

                <canvas id="snake-canvas" className={styles['snake-canvas']}></canvas>
                <div id='overlay' className={styles['snake-overlay'] + ' absolute z-50 pointer-events-none'}>
                    <div className="text-5xl  z-50 absolute top-5 left-1/2 transform -translate-x-1/2 opacity-10">
                        <FaArrowUp />
                    </div>
                    <div className="text-5xl z-50 absolute bottom-5 left-1/2 transform -translate-x-1/2 opacity-10">
                        <FaArrowDown />
                    </div>
                    <div className="text-5xl z-50 absolute left-5 top-1/2 transform -translate-y-1/2 opacity-10">
                        <FaArrowLeft />
                    </div>
                    <div className="text-5xl z-50 absolute right-5 top-1/2 transform -translate-y-1/2 opacity-10">
                        <FaArrowRight />
                    </div>
                </div>
                <div id="snake-controls" className={styles['snake-controls']}>
                    <button className={btnClass} id="snake-start" onClick={globalScope.startGame}>Start</button>
                    <button className={btnClass} id="snake-pause" onClick={globalScope.pauseGame}>Pause</button>
                    <button className={btnClass} id="snake-reset" onClick={globalScope.resetGame}>Reset</button>
                    <div id="score" className={styles['score']}>Score: <span id="snake-score">0</span></div>
                </div>
            </div>
        </main>
    )
}
