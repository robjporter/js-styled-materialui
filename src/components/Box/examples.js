import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, object, select, color, date } from "@storybook/addon-knobs";
import React from "react";
import Box from '@material-ui/core/Box';

const stories = storiesOf("Material UI/Core/Box", module).addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <Box>TEST</Box>
    );
});

stories.add("Configurable", () => {
    return (
        <Box
            m={number("Margin", 0)}
            p={number("Padding", 0)}
            component={select("Component", ["div", "span"], "div")}
            color={text("Color","text.secondary")}
            bgcolor={text("Background Color","background.paper")}
            border={number("Border",0)}
            borderColor={text("Border Color","palevioletred")}
            borderRadius={text("Border Radius", "0%")}
            width={text("Width","100%")}
        >
            TEST
        </Box>
    );
});

const stories2 = storiesOf("Material UI/Core/Box/Examples", module).addDecorator(withKnobs);

stories2.add("Box as Span", () => {
    return (
        <Box component="span">TEST</Box>
    );
});

stories2.add("Box with Margin", () => {
    return (
        <Box m={4}>TEST</Box>
    );
});

stories2.add("Box text color", () => {
    return (
        <Box color="text.secondary">TEST</Box>
    );
});

stories2.add("Box with Padding", () => {
    return (
        <Box p={4}>TEST</Box>
    );
});

stories2.add("Box with color", () => {
    return (
        <Box color="blue">TEST</Box>
    );
});

stories2.add("Box with background color", () => {
    return (
        <Box bgcolor="palevioletred">TEST</Box>
    );
});

stories2.add("Box with border", () => {
    return (
        <Box border={1}>TEST</Box>
    );
});

stories2.add("Box with border color", () => {
    return (
        <Box border={1} borderColor="palevioletred">TEST</Box>
    );
});

stories2.add("Box inline", () => {
    return (
        <Box width="100%">
            <Box border={1} borderColor="palevioletred" display="inline">TEST</Box>
            <Box border={1} borderColor="palevioletred" display="inline">TEST</Box>
        </Box>
    );
});

stories2.add("Box block", () => {
    return (
        <Box width="100%">
            <Box border={1} borderColor="palevioletred" display="block">TEST</Box>
            <Box border={1} borderColor="palevioletred" display="block">TEST</Box>
        </Box>
    );
});

stories2.add("Box order", () => {
    return (
        <Box display="flex" p={1}>
            <Box p={1} order={2} bgcolor="grey.300">Item 1</Box>
            <Box p={1} order={3} bgcolor="grey.300">Item 2</Box>
            <Box p={1} order={1} bgcolor="grey.300">Item 3</Box>
        </Box>
    );
});

stories2.add("Box Shadow", () => {
    return (
        <Box display="flex" p={1}>
            <Box
                boxShadow={0}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: '8rem', height: '5rem' }}
            >
                boxShadow={0}
            </Box>
            <Box
                boxShadow={1}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: '8rem', height: '5rem' }}
            >
                boxShadow={1}
            </Box>
            <Box
                boxShadow={2}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: '8rem', height: '5rem' }}
            >
                boxShadow={2}
            </Box>
            <Box
                boxShadow={3}
                bgcolor="background.paper"
                m={1}
                p={1}
                style={{ width: '8rem', height: '5rem' }}
            >
                boxShadow={3}
            </Box>
        </Box>
    );
});

stories2.add("Box Sizes", () => {
    return (
        <Box width="100%" bgcolor="background.paper">
            <Box width={1 / 4} bgcolor="grey.300" p={1} my={0.5}>
                Width 1/4
            </Box>
            <Box width={300} bgcolor="grey.300" p={1} my={0.5}>
                Width 300
            </Box>
            <Box width="75%" bgcolor="grey.300" p={1} my={0.5}>
                Width 75%
            </Box>
            <Box width={1} bgcolor="grey.300" p={1} my={0.5}>
                Width 1
            </Box>
        </Box>
    );
});

stories2.add("Box Width", () => {
    return (
        <Box width="100%" bgcolor="background.paper">
            <Box width="25%" bgcolor="grey.300" p={1} my={0.5}>
                Width 25%
            </Box>
            <Box width="50%" bgcolor="grey.300" p={1} my={0.5}>
                Width 50%
            </Box>
            <Box width="75%" bgcolor="grey.300" p={1} my={0.5}>
                Width 75%
            </Box>
            <Box width="100%" bgcolor="grey.300" p={1} my={0.5}>
                Width 100%
            </Box>
            <Box width="auto" bgcolor="grey.300" p={1} my={0.5}>
                Width auto
            </Box>
        </Box>
    );
});

stories2.add("Box Height", () => {
    return (
        <Box height={100} width="100%" bgcolor="background.paper">
            <Box height="25%" bgcolor="grey.300" mx={0.5} width={120} display="inline-block">
                Height 25%
            </Box>
            <Box height="50%" bgcolor="grey.300" mx={0.5} width={120} display="inline-block">
                Height 50%
            </Box>
            <Box height="75%" bgcolor="grey.300" mx={0.5} width={120} display="inline-block">
                Height 75%
            </Box>
            <Box height="100%" bgcolor="grey.300" mx={0.5} width={120} display="inline-block">
                Height 100%
            </Box>
        </Box>
    );
});

stories2.add("Box Alignment", () => {
    return (
        <Box height={100} width="100%" bgcolor="background.paper">
            <Box textAlign="justify" m={1}>
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                Donec sed odio operae, eu vulputate felis rhoncus.
            </Box>
            <Box textAlign="left" m={1}>
                Left aligned text.
            </Box>
            <Box textAlign="center" m={1}>
                Center aligned text.
            </Box>
            <Box textAlign="right" m={1}>
                Right aligned text.
            </Box>
        </Box>
    );
});

stories2.add("Box Font Size", () => {
    return (
        <Box height={100} width="100%" bgcolor="background.paper">
            <Box fontSize="fontSize" m={1}>
                Default
            </Box>
            <Box fontSize="h6.fontSize" m={1}>
                h6.fontSize
            </Box>
            <Box fontSize={16} m={1}>
                16px
            </Box>
            <Box fontSize={44} m={1}>
                44px
            </Box>
        </Box>
    );
});

stories2.add("Box Font Weight", () => {
    return (
        <Box height={100} width="100%" bgcolor="background.paper">
            <Box fontWeight="fontWeightLight" m={1}>
                Light - 300
            </Box>
            <Box fontWeight="fontWeightRegular" m={1}>
                Regular - 400
            </Box>
            <Box fontWeight="fontWeightMedium" m={1}>
                Medium - 500
            </Box>
            <Box fontWeight={500} m={1}>
                500
            </Box>
            <Box fontWeight="fontWeightBold" m={1}>
                Bold - 700
            </Box>
        </Box>
    );
});

stories2.add("Box Font Style", () => {
    return (
        <Box height={100} width="100%" bgcolor="background.paper">
            <Box fontStyle="normal" m={1}>
                Normal font style.
            </Box>
            <Box fontStyle="italic" m={1}>
                Italic font Style.
            </Box>
            <Box fontStyle="oblique" m={1}>
                Oblique font style.
            </Box>
        </Box>
    );
});

stories2.add("Box Letter Spacing", () => {
    return (
        <Box height={100} width="100%" bgcolor="background.paper">
            <Box letterSpacing={6} m={1}>
                Letter Spacing 6px.
            </Box>
            <Box letterSpacing={10} m={1}>
                Letter Spacing 10px.
            </Box>
        </Box>
    );
});



