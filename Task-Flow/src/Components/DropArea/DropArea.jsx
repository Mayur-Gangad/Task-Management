import { useState } from "react";
import "./DropArea.css";

const DropArea = ({ onDropHandler }) => {
  const [showDropArea, setShowDropArea] = useState(false);

  return (
    <section
      className={showDropArea ? "drop-area" : "hide-drop-area"}
      onDragEnter={() => setShowDropArea(true)}
      onDragLeave={() => {
        setShowDropArea(false);
      }}
      onDrop={() => {
        setShowDropArea(false);
        onDropHandler();
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      This is drop Area
    </section>
  );
};

export default DropArea;
