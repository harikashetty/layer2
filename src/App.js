import React from "react";

function App() {
  return (
    <div style={{
      backgroundColor: "#071022",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{fontSize: "2.2rem"}}>🎁 Surprise Layer 2 🎁</h1>
      <p style={{maxWidth: 600}}>
        Nice! You're getting closer. Don’t stop now — click the button below 🙂
      </p>
      <a
        href="https://layer3-surprise.vercel.app/"
        style={{
          backgroundColor: "#84f0c1",
          color: "#012",
          padding: "12px 22px",
          borderRadius: "12px",
          textDecoration: "none",
          fontSize: "18px",
          marginTop: "18px"
        }}
      >
        Next → Almost There
      </a>
    </div>
  );
}

export default App;
