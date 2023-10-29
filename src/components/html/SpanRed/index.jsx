import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function SpanGreen({ children }) {
  const { colorMode } = useColorMode();
  return (
    <span
      style={{
        color: colorMode === "dark" ? "#e13238" : "#af272b",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}