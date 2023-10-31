'use client'
import React from 'react';

interface Props {
    error: Error,
    reset: () => void
}

const Error = ({error, reset}: Props) => {
    console.log(error);
    return (
        <main>
            <h1>oopsie {error.message}</h1>
            <button onClick={reset}>Retry</button>
        </main>
    );
};

export default Error;