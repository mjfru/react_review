import React from "react";

export default function FlashMessages({ messages }) {
  return (
    <div className="floating-alerts">
      {messages.map((msg, index) => {
        return (
          <div
            key={index}
            className="text-center shadow-sm alert alert-success floating-alert"
          >
            {msg}
          </div>
        );
      })}
    </div>
  );
}
