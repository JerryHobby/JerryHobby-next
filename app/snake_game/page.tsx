'use client';
import React, { useEffect, useState } from 'react';
import './index';
import styles from './snake_game.module.css';

let btnClass="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"

export default function Snake() {
    return (
        <div id="snake-game" className={styles['content-wrapper']}>
            <h2 className="text-2xl font-bold text-blue-500 m-5">Jerry&apos;s WASM/Rust Snake Game</h2>
            <canvas id="snake-canvas" className={styles['snake-canvas']}></canvas>
            <div id="snake-controls" className={styles['snake-controls']}>
                <button className={btnClass} id="snake-start" onClick={window.startGame}>Start</button>
                <button className={btnClass} id="snake-pause" onClick={window.pauseGame}>Pause</button>
                <button className={btnClass} id="snake-reset" onClick={window.resetGame}>Reset</button>
                <div id="score" className={styles['score']}>Score: <span id="snake-score">0</span></div>
            </div>
        </div>
    )
}
