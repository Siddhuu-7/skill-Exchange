import React from 'react';

export default function PostsCard({ PostData }) {
  const firstLetter = PostData.name.charAt(0).toUpperCase();

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  const randomColor = getRandomColor();

  return (
    <div
      className="card p-3 mb-4"
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        maxWidth: "300px", 
        height: "auto",
        overflow: "hidden", 
        marginBottom:"20px",
        marginRight:"10px",
        marginTop:"10px"
      }}
    >
      <div className="d-flex align-items-center mb-3">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: randomColor,
            color: "#fff",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          {firstLetter}
        </div>
        <p
          className="ms-2 mb-0"
          style={{
            whiteSpace: "nowrap", 
            overflow: "hidden", 
            textOverflow: "ellipsis", 
            maxWidth: "calc(100% - 50px)", 
          }}
        >
          {PostData.name}
        </p>
      </div>
      <p
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis", 
        }}
      >
        <strong>Bio:</strong> {PostData.Bio}
      </p>
      <p style={{ display: "flex", alignItems: "center" }}>
  <strong>Total Teaches:</strong>
  <span
    style={{
      marginLeft: "10px",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: "30px", 
      height: "30px", 
      borderRadius: "50%", 
      backgroundColor: "gray", 
      color: "#fff", 
      fontWeight: "bold", 
      fontSize: "14px", 
    }}
  >
    {PostData.TotalTeaches}
  </span>
</p>

      <div>
        <strong>Skills:</strong>
        <ul
          style={{
            maxHeight: "100px", 
            overflowY: "auto", 
            paddingLeft: "20px", 
          }}
        >
          {PostData.Skills.map((skill, index) => (
            <li key={index} style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn text-white"
          style={{
            backgroundColor: "black",
            padding: "10px 20px",
            width: "48%",
          }}
        >
          Connect
        </button>
        <button
          className="btn"
          style={{
            backgroundColor: "transparent",
            padding: "10px 20px",
            width: "48%",
            border: "1px solid #007bff",
            color: "#007bff",
          }}
        >
          Profile
        </button>
      </div>
    </div>
  );
}
