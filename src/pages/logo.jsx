import { useNavigate } from "react-router-dom"
import "../styles/fonts.css"
import "../styles/buttons.css"

export default function Logo() {
  const navigate = useNavigate()

  return (
    <div style={container}>
      <img src="/bouquet.png" alt="Flower Bouquet" style={flowerIcon} />
      
      <h1 style={title}>DearBloom</h1>
      
      <p style={tagline}>
        BEAUTIFUL FLOWERS<br />
        DELIVERED DIGITALLY
      </p>

      <div style={buttonContainer}>
        <button onClick={() => navigate("/build")} style={primaryBtn}>
          BUILD A BOUQUET
        </button>

        <button onClick={() => navigate("/note")} style={secondaryBtn}>
          WRITE A NOTE
        </button>
      </div>
    </div>
  )
}

const container = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#e79fb5ff",
  fontFamily: "serif"
}

const flowerIcon = {
  width: "120px",
  height: "120px",
  objectFit: "contain",
  marginBottom: "20px"
}

const title = {
  fontSize: "72px",
  fontFamily: "'Floraison', serif",
  fontWeight: "400",
  margin: "0",
  letterSpacing: "2px"
}

const tagline = {
  textAlign: "center",
  fontSize: "14px",
  letterSpacing: "3px",
  marginTop: "20px",
  marginBottom: "40px"
}

const buttonContainer = {
  display: "flex",
  gap: "20px",
  marginBottom: "30px"
}

const primaryBtn = {
  padding: "15px 40px",
  background: "#000",
  color: "#fff",
  border: "none",
  fontSize: "14px",
  letterSpacing: "2px",
  cursor: "pointer",
  fontFamily: "'Pantalone', sans-serif"
}

const secondaryBtn = {
  padding: "15px 40px",
  background: "transparent",
  color: "#000",
  border: "2px solid #000",
  fontSize: "14px",
  letterSpacing: "2px",
  cursor: "pointer",
  fontFamily: "'Pantalone', sans-serif"
}

const link = {
  textDecoration: "underline",
  color: "#000",
  fontSize: "14px",
  letterSpacing: "2px",
  cursor: "pointer"
}
