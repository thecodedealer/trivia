import React, {FC, useState} from "react";
import {Button, FormControl, InputLabel, makeStyles, MenuItem, Select, Typography} from "@material-ui/core";
import {QuestionDifficulty, QuestionType} from "../interfaces";
import {fetchQuestions} from "../store/modules/main/thunk/fetch-actions";
import {useDispatch, useSelector} from "react-redux";
import {selectCategories} from "../store/modules/main/plain/selectors";

interface IProps {
}

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export const MainForm: FC<IProps> = () => {

    const dispatch = useDispatch()

    const classes = useStyles();

    const [amount, setAmount] = useState<number>(5);

    const [category, setCat] = useState<number>(0)

    const [difficulty, setDifficulty] = useState<QuestionDifficulty>('easy');

    const [type, setType] = useState<QuestionType>('multiple');

    const categories = useSelector(selectCategories)

    const handleChangeAmount = (event) => {
        setAmount(event.target.value);
    };

    const handleChangeDifficulty = (event) => {
        setDifficulty(event.target.value);
    };

    const handleChangeType = (event) => {
        setType(event.target.value);
    };

    const handleChangeCat = (e) => {
        setCat(e.target.value)
    }

    const handleGenerateQuestions = () => {
        let config = {amount, difficulty, type}

        if (category) { // @ts-ignore
            config = {...config, category}
        }

        dispatch(fetchQuestions(config))
    }

    return (
        <>
            <Typography variant="h4" component="h2">
                Config Questions
            </Typography>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={amount}
                    onChange={handleChangeAmount}
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={difficulty}
                    onChange={handleChangeDifficulty}
                >
                    <MenuItem value='easy'>Easy</MenuItem>
                    <MenuItem value='medium'>Medium</MenuItem>
                    <MenuItem value='hard'>Hard</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    disabled
                    onChange={handleChangeType}
                >
                    <MenuItem value='any'>Any</MenuItem>
                    <MenuItem value='multiple'>Multiple Choice</MenuItem>
                    <MenuItem value='boolean'>True / false</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={handleChangeCat}
                >
                    <MenuItem value={0}>Select category</MenuItem>
                    {
                        categories.map((cat, index) => (
                            <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <div>
                <Button variant="contained" onClick={handleGenerateQuestions}>GENERATE
                    QUESTIONS</Button>
            </div>
        </>
    );
}


