import { useEffect, useState } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data.slice(0, 10)); // show only 10
        }

        fetchPosts();
    }, []);

    return (
        <>
            <h2>Posts</h2>
            <div style={{ padding: "20px" }} >
                {posts.map((p) => (
                    <div key={p.id} className="box">
                        <div>
                            <h3>{p.title}</h3>
                            <p>{p.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

const box = {

};

export default Posts;