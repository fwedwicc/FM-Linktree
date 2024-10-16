'use client'
import { useState } from "react"

export function Card({ title, user, onHover }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(!isHovered);
    onHover(title); // Update heading with the card title
  };

  const handleMouseOut = () => {
    setIsHovered(isHovered);
    onHover('Welcome nowhere!'); // Revert heading to default
  };

  return (
    <div
      className="border p-2"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <h2>{title}</h2>
      <p>{user}</p>
    </div>
  );
}
