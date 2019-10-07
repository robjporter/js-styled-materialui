import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, object, select, color, date } from "@storybook/addon-knobs";
import React from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from "../../theme/theme";

const stories = storiesOf("Material UI/Core/Button", module).addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <Button>TEST</Button>
    );
});

stories.add("Configurable", () => {
    return (
        <Button
            variant="square"
        >
            TEST
        </Button>
    );
});

const stories2 = storiesOf("Material UI/Core/Button/Examples", module).addDecorator(withKnobs);

stories2.add("Button Sizes", () => {
    return (
        <div>
            <Button variant="contained" color="primary" size="small">
                Small
            </Button>
            <Button variant="contained" color="primary" size="medium">
                Medium
            </Button>
            <Button variant="contained" color="primary" size="large">
                Large
            </Button>
            <Button variant="contained" color="primary" size="xl">
                Large
            </Button>
        </div>
    );
});

stories2.add("Button Custom Colors", () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained" color="success">
                Small
            </Button>
        </ThemeProvider>
    );
});

stories2.add("Button Types", () => {
    return (
        <div>
            <Button variant="contained">
                Default
            </Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="contained" color="secondary">
                Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button>
            <input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                style={{display: 'none'}}
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                Upload
                </Button>
            </label>
        </div>
    );
});

stories2.add("Button as Text", () => {
    return (
        <div>
            <Button>Default</Button>
            <Button color="primary">
                Primary
            </Button>
            <Button color="secondary">
                Secondary
            </Button>
            <Button disabled>
                Disabled
            </Button>
            <Button href="#text-buttons">
                Link
            </Button>
            <input
                accept="image/*"
                id="text-button-file"
                multiple
                type="file"
                style={{display: 'none'}}
            />
            <label htmlFor="text-button-file">
                <Button component="span">
                Upload
                </Button>
            </label>
        </div>
    );
});

stories2.add("Button Outline", () => {
    return (
        <div>
            <Button variant="outlined">
                Default
            </Button>
            <Button variant="outlined" color="primary">
                Primary
            </Button>
            <Button variant="outlined" color="secondary">
                Secondary
            </Button>
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
                Link
            </Button>
            <input
                accept="image/*"
                id="outlined-button-file"
                multiple
                type="file"
                style={{display: 'none'}}
            />
            <label htmlFor="outlined-button-file">
                <Button variant="outlined" component="span">
                Upload
                </Button>
            </label>
            <Button variant="outlined" color="inherit">
                Inherit
            </Button>
        </div>
    );
});

stories2.add("Button Group", () => {
    return (
        <ButtonGroup
            color="primary"
            size="large"
            aria-label="large outlined secondary button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
        </ButtonGroup>
    );
});