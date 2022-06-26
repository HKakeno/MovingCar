import { FormLabel, IconButton, Box, Switch, useColorMode, useColorModeValue, Stack, FormControl } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode()

    return (
        // <IconButton
        //     aria-label="Toggle theme"
        //     colorScheme={useColorModeValue('purple', 'orange')}
        //     icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        //     onClick={toggleColorMode}
        // >
        // </IconButton>
        <Stack
            display="inline-block">
                <FormControl
                    display="flex"
                    >
                    <FormLabel>Dark Mode</FormLabel>
                    <Switch
                        onChange={toggleColorMode}
                    />
                </FormControl>
            
        </Stack>
        
    )
}

export default ThemeToggleButton