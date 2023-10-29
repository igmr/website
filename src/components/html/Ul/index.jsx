import React from 'react'

export default function Ul({ children })
{
    return <ul style={{ listStyle:"none", margin: 0 }}>{ children }</ul>
}