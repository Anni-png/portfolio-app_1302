'use client'
import React from 'react'
import theme from "../../theme"
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from 'next-themes'
import system from "../../theme"

export function Provider({children}) {
  return (
    <ChakraProvider theme={theme} value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>{children}</ThemeProvider>
    </ChakraProvider>
  )
}
