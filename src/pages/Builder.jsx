import { useState } from "react"
import { flowers } from "../data/flowers"
import { useNavigate } from "react-router-dom"
import BouquetPreview from "../components/BouquetPreview"
import "../styles/buttons.css"
import "../styles/fonts.css"

export default function Builder() {
  const [selected, setSelected] = useState([])
  const [hoveredId, setHoveredId] = useState(null)
  const navigate = useNavigate()

  const addFlower = (flower) => {
    if (selected.length < 7) {
      setSelected([...selected, { ...flower, uniqueId: Date.now() + Math.random() }])
    }
  }

  const removeFlower = (uniqueId) => {
    setSelected(selected.filter(f => f.uniqueId !== uniqueId))
  }

  return (
    <div style={container}>
      <h1 style={title}>DearBloom</h1>
      <h2 style={subtitle}>PICK UP TO 7 BLOOMS</h2>

      <div style={grid}>
        {flowers.map(flower => (
          <div
            key={flower.id}
            onClick={() => addFlower(flower)}
            onMouseEnter={() => setHoveredId(flower.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={card}
          >
            <img src={flower.image} alt={flower.name} style={flowerImg} />
            {hoveredId === flower.id && (
              <div style={quote}>{flower.quote}</div>
            )}
          </div>
        ))}
      </div>

      <h3 style={previewTitle}>Your Bouquet ({selected.length}/7)</h3>
      <div style={selectedContainer}>
        {selected.map(flower => (
          <div key={flower.uniqueId} style={selectedFlower} onClick={() => removeFlower(flower.uniqueId)}>
            <img src={flower.image} alt={flower.name} style={smallImg} />
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/customize", { state: { selected } })}
        style={btn}
        disabled={selected.length === 0}
      >
        NEXT ({selected.length}/7)
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
  fontSize: "48px",
  fontFamily: "'Floraison', serif",
  margin: "0 0 10px 0"
}

const subtitle = {
  fontSize: "18px",
  letterSpacing: "3px",
  marginBottom: "40px"
}

const grid = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "30px",
  maxWidth: "1000px",
  margin: "0 auto",
  marginBottom: "40px"
}

const card = {
  cursor: "pointer",
  transition: "transform 0.3s ease",
  position: "relative"
}

const flowerImg = {
  width: "120px",
  height: "120px",
  objectFit: "contain",
  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
}

const quote = {
  position: "absolute",
  bottom: "-30px",
  left: "50%",
  transform: "translateX(-50%)",
  background: "rgba(255,255,255,0.95)",
  padding: "8px 12px",
  borderRadius: "8px",
  fontSize: "12px",
  fontStyle: "italic",
  whiteSpace: "nowrap",
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  zIndex: 10
}

const previewTitle = {
  fontSize: "20px",
  marginBottom: "20px"
}

const selectedContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  flexWrap: "wrap",
  minHeight: "80px",
  marginBottom: "30px"
}

const selectedFlower = {
  cursor: "pointer",
  transition: "transform 0.2s"
}

const smallImg = {
  width: "60px",
  height: "60px",
  objectFit: "contain"
}

const btn = {
  padding: "15px 50px",
  background: "#000",
  color: "#fff",
  border: "none",
  fontSize: "14px",
  letterSpacing: "2px",
  cursor: "pointer",
  fontFamily: "'Pantalone', sans-serif"
}