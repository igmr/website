import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function Check() {
  const { colorMode } = useColorMode();
  return (
    <span
      style={{
        color: colorMode === "dark" ? "#25c2a0" : "#2e8555",
        fontWeight: "bold",
      }}
    >
      ✔
    </span>
  );
}