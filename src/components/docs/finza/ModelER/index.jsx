import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'
import imgModelER from '@site/static/img/docs/finza/model-er.png'
import imgModelERDark from '@site/static/img/docs/finza/model-er-dark.png'

export default function ModelER()
{
    const { colorMode } = useColorMode()
    return <img src={colorMode === 'dark' ? imgModelERDark : imgModelER} alt="Modelo entidad relación del sistema de finanzas personales"/>
}
