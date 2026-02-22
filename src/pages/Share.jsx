import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "../styles/fonts.css"
import "../styles/buttons.css"

export default function Share() {
  const { code } = useParams()
  const navigate = useNavigate()

  let data
  try {
    data = JSON.parse(atob(code))
  } catch {
    return (
      <div style={container}>
        <h1 style={title}>Invalid Bouquet Link</h1>
        <button onClick={() => navigate("/")} style={btn}>
          CREATE YOUR OWN
        </button>
      </div>
    )
  }

  const getArrangementStyle = () => {
    return {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "5px",
      maxWidth: "300px",
      marginTop: "60px",
      transform: "rotate(-5deg)"
    }
  }

  return (
    <div style={container}>
      <h1 style={title}>DearBloom</h1>
      <p style={subtitle}>Hi, I made this bouquet for you!</p>

      <div style={bouquetSection}>
        <div style={previewContainer}>
          <img src={`/DearBloom/greenery/${data.greenery || 1}green.png`} alt="greenery" style={greeneryImg} />
          <div style={{ ...bouquetContainer, ...getArrangementStyle() }}>
            {data.flowers?.map((flower, index) => (
              <img key={index} src={flower.image} alt={flower.name} style={flowerImg} />
            ))}
          </div>
        </div>

        <div style={noteCard}>
          <p style={noteText}>{data.note || "No message"}</p>
          <p style={signature}>Sincerely,</p>
        </div>
      </div>

      <button onClick={() => navigate("/")} style={btn}>
        CREATE YOUR OWN BOUQUET
      </button>

      <p style={footer}>
        Made by <a href="https://www.linkedin.com/in/geetanjali-vishwakarma-654451291/" target="_blank" rel="noopener noreferrer" style={link}>GEETU</a>
      </p>
    </div>
  )
}

const container = {
  minHeight: "100vh",
  padding: "40px",
  background: "#f5f5dc",
  textAlign: "center"
}

const title = {
  fontSize: "48px",
  fontFamily: "'Floraison', serif",
  margin: "0 0 10px 0"
}

const subtitle = {
  fontSize: "18px",
  letterSpacing: "1px",
  marginBottom: "40px"
}

const bouquetSection = {
  position: "relative",
  maxWidth: "800px",
  margin: "0 auto 40px"
}

const previewContainer = {
  position: "relative",
  width: "600px",
  height: "500px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const greeneryImg = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "contain",
  zIndex: 1
}

const bouquetContainer = {
  position: "relative",
  zIndex: 2,
  margin: "auto"
}

const flowerImg = {
  width: "110px",
  height: "110px",
  objectFit: "contain",
  margin: "-15px"
}

const noteCard = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "#fff",
  border: "2px solid #000",
  padding: "20px 30px",
  maxWidth: "300px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  zIndex: 3
}

const noteText = {
  fontSize: "14px",
  fontFamily: "'Courier New', monospace",
  lineHeight: "1.6",
  marginBottom: "10px",
  textAlign: "left"
}

const signature = {
  fontSize: "14px",
  fontFamily: "'Courier New', monospace",
  textAlign: "right",
  margin: "0"
}

const btn = {
  padding: "15px 40px",
  background: "#000",
  color: "#fff",
  border: "none",
  fontSize: "14px",
  letterSpacing: "2px",
  cursor: "pointer",
  fontFamily: "'Pantalone', sans-serif",
  marginBottom: "30px"
}

const footer = {
  fontSize: "14px",
  color: "#666"
}

const link = {
  color: "#000",
  textDecoration: "none",
  fontWeight: "600"
}
