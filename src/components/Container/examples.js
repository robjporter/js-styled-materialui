import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, object, select, color, date } from "@storybook/addon-knobs";
import React from "react";
import Container from '@material-ui/core/Container';

const stories = storiesOf("Material UI/Core/Container", module).addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <Container>TEST</Container>
    );
});

stories.add("Configurable", () => {
    return (
        <Container
            fixed={boolean("Fixed",false)}
            component={select("Component",["div", "span"],"div")}
            maxWidth={select("Size", ['xs','sm', 'md', 'lg', 'xl', false], "false")}
        >
            TEST
        </Container>
    );
});

const stories2 = storiesOf("Material UI/Core/Container/Examples", module).addDecorator(withKnobs);

stories2.add("Container Max Width", () => {
    return (
        <Container maxWidth="sm">TEST</Container>
    );
});

stories2.add("Container Fixed", () => {
    return (
        <Container fixed>TEST</Container>
    );
});