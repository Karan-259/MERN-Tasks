import { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() !== "") {
            setIsLoggedIn(true);
        }
    };

    return (
        <div>
            {!isLoggedIn && (
                <form onSubmit={handleSubmit} style={{padding:"10px"}}>
                    <h2 style={{padding:"10px"}}>Login Form</h2>

                    <input
                        type="text"
                        placeholder="Enter username"
                        style={{padding:"10px", borderRadius:"10px", border:"2px solid gray"}}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <br /><br />

                    <button style={{padding:"15px", backgroundColor:"gray", borderRadius:"10px", border:"2px solid black"}} type="submit">Login</button>
                </form>
            )}
            <div>
                {isLoggedIn ? (
                    <h2 style={{padding:"15px"}}>Welcome, {username}!</h2>
                ) : (
                    <p>Please login to continue.</p>
                )}
            </div>
        </div>
    );
}

export default LoginForm;