const ProfileCard = () => {

    const students = [
        {
            id: 1,
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Arjun Kumar",
            role: "Frontend Developer",
        }, {
            id: 2,
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Sneha Verma",
            role: "UI/UX Designer"
        }];

    const cardStyle = {
        border: "3px solid skyblue",
        borderRadius: "10px",
        padding: "15px",
        width: "220px",
        textAlign: "center",
        margin: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        // border:"red"
    };

    return (
        <div >
            {
                students.map((index) => (
                    <div key={index.id} style={cardStyle}>
                        <img
                            src={index.image}
                            alt={index.role}
                            style={{ width: "80px", borderRadius: "50%" }}
                        />
                        <h3>{index.name}</h3>
                        <p>{index.role}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default ProfileCard;