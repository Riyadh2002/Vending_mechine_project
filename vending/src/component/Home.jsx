import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import vending from './images/vending2.jpg';


export default function Home() {
    return (
        <>
        
<div
        className="main"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundImage: `url(${vending})`,
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          color: "#4a4a4a", 
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 200, 0.3)", // Light overlay to soften background
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div
            className="heading"
            style={{
              height: "100px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 200, 100, 0.85)", // Warm-toned background for header
              color: "#4a4a4a", // Darker text to contrast with the sunlit tone
              borderRadius: "10px",
              marginBottom: "40px",
              padding: "20px",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
            }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif", // Stylish font family for the heading
                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)", // Subtle text shadow for better visibility
                color:"#1B1C4D",
              }}
            >
              Welcome to "Your Shop"
              
            </h1>
          </div>

          <div
  className="container glassy-bg"
  style={{
    marginTop: "40px",
    padding: "20px",
    borderRadius: "15px",
    background: "rgba(255, 255, 255, 0.2)", // Light background with opacity
    backdropFilter: "blur(5px)", // Frosted glass effect
    WebkitBackdropFilter: "blur(10px)", // Frosted glass for Safari
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    border: "1px solid rgba(255, 255, 255, 0.3)", // Light border for contrast
  }}
>
<h3
  style={{
    fontSize: "2.5rem",
    marginBottom: "30px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #FFD700, #FFA500)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
  }}
>
  Select Your Item
</h3>
  <div
    className="row"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {/* Button Links */}
    {[
      { label: "Soft Drinks", color: "#ffc857", link: "/softdrink" },
      { label: "Chocolates", color: "#ff6b6b", link: "/chocolate" },
      { label: "Biscuit", color: "#ff9f1c", link: "/biscuit" },
      { label: "Chanacur", color: "#ffd166", link: "/chanacur" },
    ].map((item) => (
      <Link
        to={item.link}
        key={item.label}
        style={{ textDecoration: "none", margin: "10px", width: "100%" }}
      >
        <button
          style={{
            height: "60px",
            width: "400px",
            backgroundColor: item.color,
            color: "#fff", // White text for better contrast
            fontSize: "20px",
            fontFamily: "'Poppins', sans-serif", // Stylish font for buttons
            fontWeight: "bold", // Bold text for the button
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 6px 16px rgba(0, 0, 0, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(0, 0, 0, 0.2)";
          }}
        >
          {item.label}
        </button>
      </Link>
    ))}
  </div>
</div>

        </div>
      </div>

        </>
    )
}
