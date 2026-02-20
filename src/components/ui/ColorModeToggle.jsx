

import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useTheme } from 'next-themes'

export function ColorModeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect (() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const current = theme ?? resolvedTheme
    const isActive = (mode) => {
        return current === mode
    }

    return (
        <ButtonGroup isAttached size="sm" aria-label="Theme toggle">
            <Button 
            onClick={() => setTheme('light')}
            color={isActive("light")
                ? undefined
                : "white"
            }
            variant={isActive("light")
                ? "solid"
                : "ghost"
            }
            _hover={isActive("light")
                ? undefined
                : {
                    _light: { color: "black"},
                    _dark: { color: "white"},
                }
            }
            >
                Light</Button>

            <Button 
            onClick={() => setTheme('dark')}
            variant={isActive("dark")
                ? "solid"
                : "ghost"
                }
            _hover={isActive("dark")
                ? undefined
                : {
                    _light: { color: "black"},
                    _dark: { color: "white"},
                }
            }
                >
                    Dark</Button>
            <Button
                onClick={() => setTheme('system')}
                color={isActive('system')
                    ? undefined
                    : "white"
                }
                _variant={
                    isActive("system")
                    ? "solid"
                    : "ghost"
                }
                >System
            </Button>

    


        </ButtonGroup>
    )
}