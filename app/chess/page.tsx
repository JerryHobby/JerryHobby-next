'use client';
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { hello, greet } from './pkg/chess';

function Page() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        async function getGreeting() {
            const wasm = import('./pkg/chess');
            const result = (await wasm).hello('World');
            if (result){
                setGreeting(result);
                greet();
            }
        }

        getGreeting().then(r => console.log(r)  );
    }, []);

    return (
        <div>Chess:::
            {greeting}
        </div>
    )
}

export default Page