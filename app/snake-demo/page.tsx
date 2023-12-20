'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import {add} from "@/app/snake-demo/pkg";


const Page = () => {
    const [result, setResult] = useState(0);

    useEffect(() => {
            if (add && typeof add === 'function') {
                const sum = add(1, 1);
                console.log('add function result:', sum);
                setResult(sum);
            }
    }, []);

    return (
        <div>
            <h1>WASM Snake Game</h1>
            <p>Result: {result}</p>
        </div>
    );
}

export default Page;