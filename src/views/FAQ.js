import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import NavigationBar from "../Components/NavigationBar";

const useStyles = makeStyles((theme) => ({}));

const FAQ = (props) => {
    const classes = useStyles();


    return (

        <div>
            <NavigationBar></NavigationBar>
            <h1>FAQ</h1>
        </div>
    )
}

export default FAQ;

