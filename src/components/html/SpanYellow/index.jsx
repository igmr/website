import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function SpanYellow({ children }) {
  const { colorMode } = useColorMode();
  return (
    <span
      style={{
        color: colorMode === "dark" ? "#e6a700" : "#ffba00",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}