import React, { useEffect, useState } from 'react'
import Score from './Score';

const Game = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime((prev) => prev + 1);
            console.log("Time updated!");
        }, 1000);
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