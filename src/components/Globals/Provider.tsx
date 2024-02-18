"use client"

import ReactLenis, { useLenis } from '@studio-freight/react-lenis';
import React from 'react';
interface  Props extends    React.ComponentProps<'div'>{}

export const  Provider = ({ children } : Props) => {
    const lenis = useLenis(({ scroll }) => {})
    return <ReactLenis  > {children}</ReactLenis>
}