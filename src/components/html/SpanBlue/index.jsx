import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function SpanBlue({ children }) {
  const { colorMode } = useColorMode();
  return (
    <span
      style={{
        color: colorMode === "dark" ? "#4cb3d4" : "#6ecfef",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}
