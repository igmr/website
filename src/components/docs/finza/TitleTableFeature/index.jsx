import React from "react";
import SpanYellow from "@site/src/components/html/SpanYellow";

export default function TitleTableFeature({ nameTable }) {
  return (
    <p>
      <em>
        Tabla: <SpanYellow>{nameTable}</SpanYellow>
      </em>
    </p>
  );
}