// @ts-nocheck
import React from "react";

export default function CustomTextIput({ label, value, setValue }) {
  return (
    <label>
      {label}:
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </label>
  );
}
