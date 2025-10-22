import React, { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 5;

  const handleNextLayer = (e) => {
    e.preventDefault();

    if (attempts >= maxAttempts) {
      Swal.fire({
        title: "😢 No more chances!",
        text: "You’ve used all 5 attempts. Try again later!",
        icon: "error",
        background: "#071022",
        color: "#fff",
        confirmButtonColor: "#84f0c1",
      });
      return;
    }

    Swal.fire({
      title: "🎉 Guess my birthday! 🎂",
      input: "text",
      inputPlaceholder: "Type your answer here...",
      confirmButtonText: "Submit 🎯",
      showCancelButton: true,
      cancelButtonText: "Cancel ❌",
      background: "#071022",
      color: "#fff",
      confirmButtonColor: "#84f0c1",
      cancelButtonColor: "#555",
      backdrop: `
        rgba(0,0,0,0.6)
        url("https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif") 
        center top
        no-repeat
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        const answer = result.value ? result.value.trim() : "";

        // Acceptable formats
        const validAnswers = ["27-09-2005", "2005-09-27"];
        
        if (validAnswers.includes(answer)) {
          Swal.fire({
            title: "🎉 Correct! 🎉",
            text: "You unlocked the next surprise layer 💝",
            icon: "success",
            background: "#071022",
            color: "#fff",
            confirmButtonColor: "#84f0c1",
            confirmButtonText: "Next Layer 🚀",
          }).then(() => {
            window.location.href = "https://layer3-seven.vercel.app/";
          });
        } else {
          const newAttempts = attempts + 1;
          setAttempts(newAttempts);

          if (newAttempts < maxAttempts) {
            Swal.fire({
              title: "❌ Wrong answer!",
              text: `You have ${maxAttempts - newAttempts} attempts left.`,
              icon: "error",
              background: "#071022",
              color: "#fff",
              confirmButtonColor: "#84f0c1",
            });
          } else {
            Swal.fire({
              title: "🚫 Out of chances!",
              text: "You’ve used all 5 attempts. Better luck next time 💔",
              icon: "warning",
              background: "#071022",
              color: "#fff",
              confirmButtonColor: "#84f0c1",
            });
          }
        }
      }
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#071022",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.2rem" }}>🎁 Surprise Layer 2 🎁</h1>
      <p style={{ maxWidth: 600 }}>
        Nice! You're getting closer. Don’t stop now — answer the question to move forward 🙂
      </p>

      <a
        href="https://layer3-seven.vercel.app/"
        onClick={handleNextLayer}
        style={{
          backgroundColor: "#84f0c1",
          color: "#012",
          padding: "12px 22px",
          borderRadius: "12px",
          textDecoration: "none",
          fontSize: "18px",
          marginTop: "18px",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "0 0 15px rgba(132,240,193,0.6)",
          opacity: attempts >= maxAttempts ? 0.6 : 1,
          pointerEvents: attempts >= maxAttempts ? "none" : "auto",
        }}
      >
        Next → Almost There
      </a>
    </div>
  );
}
export default App;
  