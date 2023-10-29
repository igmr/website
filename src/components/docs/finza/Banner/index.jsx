import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import bannerDark from '@site/static/img/docs/finza/banner-dark.png'
import bannerLight from '@site/static/img/docs/finza/banner-light.png'

export default function Banner()
{
    const { colorMode } = useColorMode()
    return <img src={colorMode === 'dark' ? bannerDark : bannerLight} alt="Logo de finanzas personales"/>
}