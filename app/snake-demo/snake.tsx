
import dynamic from 'next/dynamic'
import React from 'react';

// Create a new React component that renders RustComponent

export interface AddModuleExports {
    add(a: Number, b: Number): Number
}

interface RustComponentProps {
    a: Number,
    b: Number,
}
const RustComponent = dynamic({
    loader: async () => {
        // Import the wasm module
        // @ts-ignore
        const exports = (await import('./pkg/')) as AddModuleExports
        const { add } = exports
        console.log(exports);

        // Return a React component that calls the add method on the wasm module
        return ({ a, b }: RustComponentProps) => {
            console.log('RustComponent is being rendered with props:', { a, b });
            if (typeof add === 'function') {
                console.log('add function result:', add(a, b));
                return (
                    <div>
                        <h2>WASM Snake Game - add call</h2>
                        <>{ add(a, b) }</>
                    </div>
                );
            } else {
                console.error('add function is not defined');
                return null;
            }
        }
    },
})