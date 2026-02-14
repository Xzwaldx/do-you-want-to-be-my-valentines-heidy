import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ top: "0", left: "0" });
  const [hasMoved, setHasMoved] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const MAX_SCALE = 2.9;

  const moveNoButton = () => {
    setHasMoved(true);
    const randomTop = Math.floor(Math.random() * 70) + 15;
    const randomLeft = Math.floor(Math.random() * 70) + 15;
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });

    setYesSize((prev) => (prev < MAX_SCALE ? prev + 0.3 : prev));
  };

  if (isAccepted) {
    return (
      <div className="container fade-in">
        <h1 className="title">
          ¡Siiiii! ❤️ Sabía que aceptarías nuggetsita hermosa ❤️
        </h1>
        <img
          className="main-img"
          src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b2FudHN4M24xbnQzcDc3YjQzYno3Z2piZHRrcGx2OTIwdjZ4dTl5dSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hTC5cAFPPFBAzJmg7w/giphy.gif"
          alt="Amor"
        />
        <p className="final-text">¡Nos vemos mañana y el 21! 🥰</p>
      </div>
    );
  }

  return (
    <div className="container">
      <img
        className="main-img"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHc5YTB0NjBtZzljY25hbWdicTRhcDd5dmo2b2d0d3Y4a3F5c3N6ayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uoMCJXipAJ37eUu4tl/giphy.gif"
        alt="Gatito tierno"
      />

      <h1 className="title">¿Dear sunflower🌻, quieres ser mi Valentine? 💕</h1>

      <div className="button-wrapper">
        {/* BOTÓN YES (A LA IZQUIERDA) */}
        <button
          className="btn-yes"
          style={{
            transform: `scale(${yesSize})`,
            marginTop: "-50px",
            marginRight: "180px", // Espacio para que el NO se vea alineado al lado
          }}
          onClick={() => setIsAccepted(true)}
        >
          ¡Sí!
        </button>

        {/* BOTÓN NO (A LA DERECHA INICIALMENTE) */}
        <button
          className="btn-no"
          style={
            hasMoved
              ? {
                  position: "fixed",
                  top: noPosition.top,
                  left: noPosition.left,
                  transition: "all 0.15s ease-out",
                  margin: 0,
                  zIndex: 999,
                }
              : {
                  position: "relative",
                  marginTop: "-50px", // Misma altura que el botón SI
                }
          }
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
        >
          No
        </button>
      </div>

      <p className="hint">
        No creo no que no quieras preciosota... pero intenta jaja 😊
      </p>
    </div>
  );
}
