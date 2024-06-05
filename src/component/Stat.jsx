import React from "react";

export default function Stat({ number, statName }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{statName}</h2>
    </section>
  );
}
