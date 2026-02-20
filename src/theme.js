import { createSystem, defaultConfig } from '@chakra-ui/react'

const config = {
        theme: {
            tokens: {
               fonts: {
                   heading: { value: "'EB Garamond', serif"},
                   body: { value: "system-ui, sans-serif"},
                },
            },
       },
}

const system = createSystem(defaultConfig, config)

export default system