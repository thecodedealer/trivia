import React, {FC} from "react";
import {AppBar, CssBaseline, makeStyles, Paper, Toolbar, Typography} from "@material-ui/core";
import {MainForm} from "./MainForm";
import {useSelector} from "react-redux";
import {selectStep} from "../store/modules/main/plain/selectors";
import {Questionnaire} from "./Questionnaire";
import {Copyright} from "./elements/Copyright";
import {Modal} from "./modals/Modal";

interface IProps {
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export const Layout: FC<IProps> = () => {

    const step = useSelector(selectStep)

    const classes = useStyles();

    return (

        <React.Fragment>

            <Modal/>

            <CssBaseline/>
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        TRIVIA APP
                    </Typography>

                </Toolbar>
            </AppBar>

            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    {step === 1 && <MainForm/>}
                    {step === 2 && <Questionnaire/>}
                </Paper>
                <Copyright/>
            </main>
        </React.Fragment>

    );
}


