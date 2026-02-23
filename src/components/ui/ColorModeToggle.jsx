

'use client'


import { IconButton } from '@chakra-ui/react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import React from 'react'


export function ColorModeToggle() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const root = document.documentElement
        if(isDark) {
            root.classList.add("dark")
        } else{
            root.classList.remove("dark")
        }
    }, [isDark])
 
    return (
            <IconButton
            aria-label="Toggle color mode"
            onClick={() => setIsDark(!isDark)}      
            variant="ghost"
            size="md"
            >

            {isDark ? <FiSun size={20} color='gold' /> : <FiMoon size={20} color='white'/> }  
            </IconButton>
    )
}