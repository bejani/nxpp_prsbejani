"use client"; // Needed for client-side interactivity in Next.js 13+

import { useState } from "react";

export default function WriteToFile() {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/write-to-file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: inputText }),
    });

    const result = await response.json();
    console.log(result.message);
  };

  return (
    <div className="container">
      <h1>Write to File</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter some text"
        />
        <button type="submit">Write to File</button>
      </form>
    </div>
  );
}
