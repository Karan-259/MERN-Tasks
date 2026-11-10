import React from 'react'

const Score = React.memo(function Score({ value }) {
    console.log("Score rendered!");
    return <h3>Score: {value}</h3>;
});
export default Score