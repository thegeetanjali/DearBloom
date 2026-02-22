import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "../styles/buttons.css"
import "../styles/fonts.css"

export default function Note() {
  const [note, setNote] = useState("")
  const navigate = useNavigate()
  const { state } = useLocation()

  const handleSubmit = () => {
    navigate("/final", { state: { flowers: state?.flowers, note, arrangement: state?.arrangement, greenery: state?.greenery } })
  }

  return (
    <div style={container}>
      <h1 style={title}>DearBloom</h1>
      <h2 style={heading}>WRITE THE CARD</h2>
      
      <div style={cardContainer}>
        <div style={leftFlowers}>
          <span style={flower}>🌸</span>
          <span style={flower}>🌺</span>
          <span style={flower}>🌼</span>
        </div>

        <div style={card}>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={200}
            placeholder="Dear Beloved, I have so much to tell you, but only this much space on this card! Still, you must know...&nbsp;&nbsp;&nbsp;"
            style={textarea}
          />
        </div>

        <div style={rightFlowers}>
          <span style={flower}>🌻</span>
          <span style={flower}>🌷</span>
          <span style={flower}>🌹</span>
        </div>
      </div>

      <p style={counter}>{note.length}/200</p>

      <div style={buttonGroup}>
        <button onClick={() => navigate(-1)} style={backBtn}>
          BACK
        </button>
        <button onClick={handleSubmit} style={nextBtn} disabled={!note.trim()}>
          NEXT
        </button>
      </div>
    </div>
  )
}

const container = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f5dc",
  padding: "40px"
}

const title = {
  fontSize: "48px",
  fontFamily: "'Floraison', serif",
  margin: "0 0 10px 0"
}

const heading = {
  fontSize: "18px",
  letterSpacing: "3px",
  marginBottom: "40px"
}

const cardContainer = {
  display: "flex",
  alignItems: "center",
  gap: "40px",
  marginBottom: "20px"
}

const leftFlowers = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  fontSize: "60px"
}

const rightFlowers = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  fontSize: "60px"
}

const flower = {
  display: "block"
}

const card = {
  background: "#fff",
  border: "2px solid #000",
  padding: "30px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
}

const textarea = {
  width: "400px",
  height: "250px",
  padding: "20px",
  fontSize: "16px",
  border: "none",
  resize: "none",
  fontFamily: "'Courier New', monospace",
  lineHeight: "1.6",
  outline: "none"
}

const counter = {
  fontSize: "14px",
  marginBottom: "20px"
}

const buttonGroup = {
  display: "flex",
  gap: "20px"
}

const backBtn = {
  padding: "15px 40px",
  background: "transparent",
  color: "#000",
  border: "2px solid #000",
  fontSize: "14px",
  letterSpacing: "2px",
  cursor: "pointer",
  fontFamily: "'Pantalone', sans-serif"
}

const nextBtn = {
  padding: "15px 40px",
  background: "#000",
  color: "#fff",
  border: "none",
  fontSize: "14px",
  letterSpacing: "2px",
  cursor: "pointer",
  fontFamily: "'Pantalone', sans-serif"
}
