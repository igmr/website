import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import banner_dark from "@site/static/img/banner-dark.png";
import banner_light from "@site/static/img/banner-light.png";

export default function BannerImageFeature() {
  const { colorMode } = useColorMode();
  return <img src={colorMode === "dark" ? banner_dark : banner_light} />;
}
