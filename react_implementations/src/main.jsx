import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

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

createRoot(document.getElementById('root')).render(
  <>
    <div style={containerStyle}>
      <div style={glowCircleStyle("400px", "-10%", "30%", "#ff6ec7")}></div>
      <div style={glowCircleStyle("300px", "70%", "-10%", "#34ace0")}></div>
      <div style={glowCircleStyle("500px", "50%", "80%", "#ff793f")}></div>
      <div style={{
        height: "90%",
        maxHeight: "90%",
        width: "90%",
        background: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        borderRadius: "4px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        overflowY: "auto"
      }}>
        <App />
      </div></div></>,
)
