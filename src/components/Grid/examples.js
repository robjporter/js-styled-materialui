import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, array, object, select, color, date } from "@storybook/addon-knobs";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from "react";
import Grid from '@material-ui/core/Grid';

const stories = storiesOf("Material UI/Core/Grid", module).addDecorator(withKnobs);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

stories.add("Default", () => {
    return (
        <Grid>TEST</Grid>
    );
});

stories.add("Configurable", () => {
    return (
        <Grid
            container
            direction={select("Direction", ["row", "row-reverse", "column", "column-reverse"], "row")}
            justify={select("Justify", ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"], "center")}
            alignItems={select("Align Items", ["flex-start", "center", "flex-end", "stretch", "baseline"], "center")}
            spacing={number("Spacing",0)}
        >
            <Grid item>TEST 1</Grid>
            <Grid item>TEST 2</Grid>  
        </Grid>
    );
});

const stories2 = storiesOf("Material UI/Core/Grid/Examples", module).addDecorator(withKnobs);

stories2.add("Grid Breakpoint", () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12}>TEST 1</Grid>
                <Grid item xs={12} sm={6}>TEST 2</Grid>
                <Grid item xs={12} sm={6}>TEST 3</Grid>
                <Grid item xs={6} sm={3}>TEST 4</Grid>
                <Grid item xs={6} sm={3}>TEST 5</Grid>
                <Grid item xs={6} sm={3}>TEST 6</Grid>
                <Grid item xs={6} sm={3}>TEST 7</Grid>
                <Grid item xs={6} sm={3}>TEST 8</Grid>
                <Grid item xs={6} sm={3}>TEST 9</Grid>
                <Grid item xs={6} sm={3}>TEST 10</Grid>
                <Grid item xs={6} sm={3}>TEST 11</Grid>
                <Grid item xs={6} sm={3}>TEST 12</Grid>
                <Grid item xs={6} sm={3}>TEST 13</Grid>
                <Grid item xs={6} sm={3}>TEST 14</Grid>
                <Grid item xs={6} sm={3}>TEST 15</Grid>
                <Grid item xs={6} sm={3}>TEST 16</Grid>
            </Grid>
        </div>
    );
});