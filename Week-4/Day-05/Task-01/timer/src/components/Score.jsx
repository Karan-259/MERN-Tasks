import React from 'react'

const Score = ({ value }) => {
        console.log("Score component rendered!");
        return (
            <div>
                <h3>Score: {value}</h3>
            </div>
        )
    }

    export default Score