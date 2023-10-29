import React from "react";
import Ul from "@site/src/components/html/Ul";
import SpanGreen from "@site/src/components/html/SpanGreen";
import Check from "@site/src/components/html/Check";
import Not from "@site/src/components/html/Not";

const TagPrimaryKey = () => {
  return (
    <li>
      <Check /> Clave primario
    </li>
  );
};

const TagForeignKey = () => {
  return (
    <li>
      <Check /> Clave foráneo
    </li>
  );
};

const TagAutoIncrement = () => {
  return (
    <li>
      <Check /> Incremental
    </li>
  );
};

const TagDefaultValue = ({value}) => {
  if(value)
  {
    return (
      <li>📍 Valor por default: {value} </li>
    );
  }
  else
    return  ''
};

const TagDefaultNull = () => {
  return (
    <li>📍 Valor por default: null </li>
  );
};

export default function FieldFeature(props) {
  return (
    <details className="details_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module isBrowser_node_modules-@docusaurus-theme-common-lib-components-Details-styles-module alert alert--info details_node_modules-@docusaurus-theme-classic-lib-theme-Details-styles-module">
      <summary>
        {props.isPrimaryKey && "🔑"} {props.isForeignKey && "🗝"} {props.field}{" "}
        <SpanGreen>{props.types}</SpanGreen>
      </summary>
      <Ul>
        <li>{props.isNull ? <Check /> : <Not />} Nulo</li>
        <li>{props.isUnique ? <Check /> : <Not />} Único</li>
        {props.isPrimaryKey && <TagPrimaryKey />}
        {props.isForeignKey && <TagForeignKey />}
        {props.isIncremental && <TagAutoIncrement />}
        {props.isDefaultNull ? <TagDefaultNull/> : <TagDefaultValue value={ props.defaultValue}/> }
        <li>
          {props.comments ? "📌" : ""} {props.comments}
        </li>
      </Ul>
    </details>
  );
}