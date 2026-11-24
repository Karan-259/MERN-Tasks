import React from 'react'
import Score from './Score';
import { useEffect } from 'react';
import { useState } from 'react';

const Game = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime((prev) => prev + 1);
        }, 2000);

        return () => clearTimeout(timer);
    }, [time]);

    return (
        <>
            <h2>Time: {time}</h2>
            <Score value={100} />
        </>
    );
}

export default Game