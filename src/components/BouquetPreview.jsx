export default function BouquetPreview({ flowers, arrangement = "circle" }) {
  if (!flowers || flowers.length === 0) {
    return <p style={{ opacity: 0.5 }}>No flowers selected</p>
  }

  return (
    <div style={container}>
      <div style={getLayout(arrangement, flowers.length)}>
        {flowers.map((flower, index) => (
          <div key={index} style={flowerWrap}>
            <img 
              src={flower.image} 
              alt={flower.name}
              style={flowerImg}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const container = {
  padding: "20px",
  background: "#fff0f4",
  borderRadius: "15px",
  marginTop: "20px",
  display: "flex",
  justifyContent: "center"
}

const flowerWrap = {
  padding: "6px",
}

const flowerImg = {
  width: "70px",
  height: "70px",
  objectFit: "contain"
}

const getLayout = (type, count) => {
  if (type === "fan") {
    return {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
      transform: "rotate(-5deg)"
    }
  }

  if (type === "layered") {
    return {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "10px"
    }
  }

  // circle (default)
  return {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px"
  }
}