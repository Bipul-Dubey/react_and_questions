function App() {
  const containerStyle = {
    height: "100vh",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    fontFamily: "'Poppins', sans-serif",
    overflow: "hidden",
    position: "relative",
  };

  const textStyle = {
    fontSize: "8vw",
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    textShadow:
      "0px 10px 20px rgba(0,0,0,0.5), 0px 5px 30px rgba(255,255,255,0.4)",
    animation: "float 6s ease-in-out infinite",
  };

  const glowCircleStyle = (size, top, left, color) => ({
    position: "absolute",
    width: size,
    height: size,
    top: top,
    left: left,
    background: color,
    filter: "blur(100px)",
    borderRadius: "50%",
    opacity: 0.7,
  });

  return (
    <div style={containerStyle}>
      <div style={glowCircleStyle("400px", "-10%", "30%", "#ff6ec7")}></div>
      <div style={glowCircleStyle("300px", "70%", "-10%", "#34ace0")}></div>
      <div style={glowCircleStyle("500px", "50%", "80%", "#ff793f")}></div>
      <div style={textStyle}>Remote</div>
    </div>
  );
}

export default App;
