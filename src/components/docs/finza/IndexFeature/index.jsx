import React from "react";
import Ul from "@site/src/components/html/Ul";
import SpanYellow from "@site/src/components/html/SpanYellow";
import Check from "@site/src/components/html/Check";

export default function IndexFeature(props) {
  return (
    <details className="details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module">
      <summary>
        <SpanYellow>{props.indexName}</SpanYellow>
      </summary>
      <Ul>
        <li>
          <Check /> Restricción
        </li>
        <li>
          {props.isPrimaryKey && <Check />}{" "}
          {props.isPrimaryKey && "Clave primaria"}
          {props.isUnique && <Check />} {props.isUnique && "Único"}
        </li>
        <li>
          <Check /> Field
        </li>
        <Ul>
          <li>
            {props.field && "💠"}
            {props.field && <SpanYellow> {props.field}</SpanYellow>}
          </li>
        </Ul>
      </Ul>
    </details>
  );
}
