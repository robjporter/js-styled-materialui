import { addDecorator, configure } from "@storybook/react";
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import theme from "../src/theme/theme";

const req = require.context("../src/components", true, /examples\.(js|mdx)$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

console.log("THEME: ", theme);

const AppProvider = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
            {/* <Box pos="fixed" bottom="24px" right="24px" zIndex={2}>
            <Button
                variant="outline"
                onClick={toggleColorMode}
                leftIcon={colorMode === "dark" ? "sun" : "moon"}
            >
                {colorMode === "dark" ? "Light" : "Dark"}
            </Button>
        </Box> */}
        </ThemeProvider>
    );
};

const newViewports = {
    kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
            width: '600px',
            height: '963px',
        },
    },
    kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
            width: '533px',
            height: '801px',
        },
    },
    Desktop: {
        name: 'Desktop',
        styles:  {
            width: '100%',
            height: '100%',
        },
        type: 'desktop'
    }
  };

addParameters({
    viewport: {
        viewports: {
            ...INITIAL_VIEWPORTS,
            ...newViewports,
        },
    },
});

addDecorator(story => <AppProvider>{story()}</AppProvider>);

configure(loadStories, module);