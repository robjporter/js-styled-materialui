import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, object, select, color, date } from "@storybook/addon-knobs";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from "react";
import Hidden from '@material-ui/core/Hidden';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import SelectType from "@storybook/addon-knobs/dist/components/types/Select";

const stories = storiesOf("Material UI/Core/Hidden", module).addDecorator(withKnobs);

stories.add("Default", () => {
    return (
        <Hidden>TEST</Hidden>
    );
});

stories.add("Configurable", () => {
    return (
        <Hidden
            xsUp={boolean("XS & Up", false)}
            smUp={boolean("SM & Up", false)}
            mdUp={boolean("MD & Up", false)}
            lgUp={boolean("LG & Up", false)}
            xlUp={boolean("XL & Up", false)}
            xsDown={boolean("XS & Down", false)}
            smDown={boolean("SM & Down", false)}
            mdDown={boolean("MD & Down", false)}
            lgDown={boolean("LG & Down", false)}
            xlDown={boolean("XL & Down", false)}
            only={select("Only", ["", 'xs', 'sm', 'md', 'lg', 'xl'], "")}
            implementation={select("Implementation", ["css", "js"], "js")}
            initialWidth={select("Initial Width", ["",'xs', 'sm', 'md', 'lg', 'xl'], "")}
        >
            TEST
        </Hidden>
    );
});

const stories2 = storiesOf("Material UI/Core/Hidden/Examples", module).addDecorator(withKnobs);

stories2.add("Hidden Size and Up", props => {
    const { width } = props;
    return (
        <div>
            Current width: {width}
            <Hidden xsUp>
                xsUp<br />
            </Hidden>
            <Hidden smUp>
                smUp<br />
            </Hidden>
            <Hidden mdUp>
                mdUp<br />
            </Hidden>
            <Hidden lgUp>
                lgUp<br />
            </Hidden>
            <Hidden xlUp>
                xlUp<br />
            </Hidden>
        </div>
    );
});


stories2.add("Hidden Size and Down", props => {
    const { width } = props;
    return (
        <div>
            Current width: {width}
            <Hidden xsDown>
                xsDown<br />
            </Hidden>
            <Hidden smDown>
                smDown<br />
            </Hidden>
            <Hidden mdDown>
                mdDown<br />
            </Hidden>
            <Hidden lgDown>
                lgDown<br />
            </Hidden>
            <Hidden xlDown>
                xlDown<br />
            </Hidden>
        </div>
    );
});

stories2.add("Hidden Only", props => {
    const { width } = props;
    return (
        <div>
            Current width: {width}
            <Hidden only="lg">
                Hidden on lg<br />
            </Hidden>
            <Hidden only="sm">
                Hidden on sm<br />
            </Hidden>
            <Hidden only={['sm', 'lg']}>
                Hidden on sm and lg<br />
            </Hidden>
        </div>
    );
});