import React, {FC, useCallback, useMemo} from "react";
import {IQuestion} from "../interfaces";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import {saveQuestion} from "../store/modules/main/thunk/basic-actions";
import {useDispatch, useSelector} from "react-redux";
import {selectQuestion} from "../store/modules/main/plain/selectors";

interface IProps {
    question: IQuestion
}

export const Question: FC<IProps> = ({question}) => {
    const dispatch = useDispatch()

    const questionId = useSelector(selectQuestion)

    const allVariants: string[] = useMemo(() => {
        return [...question.incorrect_answers, question.correct_answer]
    }, [question.incorrect_answers, question.correct_answer])

    const handleChosen = useCallback((e) => {
        dispatch(saveQuestion(e.target.value))
    }, [dispatch])

    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">{questionId}. {question.question}</FormLabel>
                <br/>
                <RadioGroup aria-label="gender" name="gender1">
                    {
                        allVariants.map((item, id) => (
                            <FormControlLabel key={id} value={item}
                                              control={<Radio onClick={handleChosen}/>}
                                              label={item}/>
                        ))
                    }
                </RadioGroup>
            </FormControl>
        </>

    );
}
