import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"
import "../styles/buttons.css"
import "../styles/fonts.css"

export default function Customize() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [note, setNote] = useState("")
  const [arrangement, setArrangement] = useState("circle")
  const [greenery, setGreenery] = useState(1)

  if (!state?.selected) {
    navigate("/build")
    return null
  }

  const changeArrangement = () => {
    const arrangements = ["circle", "fan", "layered"]
    const currentIndex = arrangements.indexOf(arrangement)
    const nextIndex = (currentIndex + 1) % arrangements.length
    setArrangement(arrangements[nextIndex])
  }

  const changeGreenery = () => {
    setGreenery((greenery % 3) + 1)
  }

  const getArrangementStyle = () => {
    if (arrangement === "circle") {
      return {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "5px",
        maxWidth: "300px",
        marginTop: "80px"
      }
    } else if (arrangement === "fan") {
      return {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "0px",
        maxWidth: "350px",
        marginTop: "80px",
        transform: "rotate(-8deg)"
      }
    } else {
      return {
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        maxWidth: "200px",
        marginTop: "80px"
      }
    }
  }

  const generateLink = () => {
    navigate("/note", { state: { flowers: state.selected, arrangement, greenery } })
  }

  return (
    <div style={container}>
      <h1 style={title}>CUSTOMIZE YOUR BOUQUET</h1>

      <div style={buttonGroup}>
        <button onClick={changeArrangement} style={primaryBtn}>
          TRY A NEW ARRANGEMENT
        </button>

        <button onClick={changeGreenery} style={secondaryBtn}>
          CHANGE GREENERY
        </button>
      </div>

      <div style={previewContainer}>
        <img src={`/DearBloom/greenery/${greenery}green.png`} alt="greenery" style={greeneryImg} />
        <div style={{ ...bouquetContainer, ...getArrangementStyle() }}>
          {state.selected.map((flower) => (
            <img key={flower.uniqueId} src={flower.image} alt={flower.name} style={flowerImg} />
          ))}
        </div>
      </div>
      <h3 style={question}>Do you like it beautiful/handsome?</h3>
      <button onClick={generateLink} style={generateBtn}>
        GENERATE BOUQUET 💌
      </button>
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
  fontSize: "24px",
  letterSpacing: "3px",
  marginBottom: "30px"
}

const buttonGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  alignItems: "center",
  marginBottom: "40px"
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

const previewContainer = {
  position: "relative",
  width: "600px",
  height: "500px",
  margin: "0 auto 40px",
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

const textarea = {
  width: "400px",
  height: "80px",
  padding: "15px",
  fontSize: "14px",
  border: "2px solid #000",
  borderRadius: "8px",
  resize: "none",
  fontFamily: "serif"
}

const counter = {
  fontSize: "12px",
  marginTop: "5px",
  marginBottom: "20px"
}

const question = {
  fontSize: "28px",
  fontFamily: "'Floraison', serif",
  marginBottom: "20px",
  fontWeight: "400"
}

const generateBtn = {
  padding: "15px 50px",
  background: "#000",
  color: "#fff",
  border: "none",
  fontSize: "14px",
  letterSpacing: "2px",
  cursor: "pointer",
  fontFamily: "'Pantalone', sans-serif"
}