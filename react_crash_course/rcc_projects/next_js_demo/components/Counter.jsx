"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>
        You have clicked this {count} times
      </button>
    </div>
  );
}
