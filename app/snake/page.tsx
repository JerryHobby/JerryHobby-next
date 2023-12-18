'use client';
import React from 'react';

const Page = () => {

    return (
        <>
            <div id="snake-game" className="content-wrapper">
                <h2>Jerry's WASM/Rust Snake Game</h2>
                <canvas id="snake-canvas"></canvas>
            {/*    <div id="snake-controls">*/}
            {/*        <button id="snake-start" onClick={() => window.startGame()}>Start</button>*/}
            {/*        <button id="snake-pause" onClick={() => window.pauseGame()}>Pause</button>*/}
            {/*        <button id="snake-reset" onClick={() => window.resetGame()}>Reset</button>*/}
            {/*        <div id="score">Score: <span id="snake-score">0</span></div>*/}
            {/*    </div>*/}
            </div>
            {/*<script src="bootstrap.js"></script>*/}
        </>
    );
};

export default Page;