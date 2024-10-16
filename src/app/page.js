'use client'
import { useState } from "react";
import { Card } from "@/components/Card";

export default function Home() {
  const [heading, setHeading] = useState('Welcome nowhere!');

  const handleCardHover = (newHeading) => {
    setHeading(newHeading); // Update the heading based on hover state
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1>{heading}</h1>
      <Card
        title="GitHub"
        user="@fwedwicc"
        onHover={handleCardHover}
      />
    </div>
  );
}
