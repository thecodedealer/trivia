import React, {FC} from "react";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {
    isFormSubmitted,
    selectCurrentQuestion,
    selectIsLastQuestion,
    selectQuestion,
    selectQuestionnaire,
    selectQuestionsLength
} from "../store/modules/main/plain/selectors";
import {Question} from "./Question";
import {openModal, resetQuestionnaire, setQuestion, setSubmitted} from "../store/modules/main/plain/actions";
import {Timer} from "./elements/Timer";

interface IProps {
}

export const Questionnaire: FC<IProps> = () => {

    const dispatch = useDispatch()

    const isSubmitted = useSelector(isFormSubmitted)

    const currentQuestion = useSelector(selectCurrentQuestion)

    const question = useSelector(selectQuestion)

    const isLastQuestions = useSelector(selectIsLastQuestion)

    const questionL = useSelector(selectQuestionsLength)

    const {score} = useSelector(selectQuestionnaire)

    const handleNavigation = (target: 'back' | 'next') => {
        if (target === 'next')
            dispatch(setQuestion(question + 1))
        else if (target === 'back')
            dispatch(setQuestion(question - 1))
    }

    const handleSubmit = () => {
        dispatch(setSubmitted())
        dispatch(openModal({
            title: 'Questionnaire result',
            content: `You answer correctly on ${score} from ${questionL} questions !`
        }))
    }

    return (
        <React.Fragment>
            <div> {!isSubmitted && <Timer/>} </div>

            <br/>
            <Question question={currentQuestion}/>
            <br/>
            <br/>
            <div>
                <Button variant="contained" color='secondary'
                        onClick={() => dispatch(resetQuestionnaire())}>RESET</Button>

                <Button disabled={question === 1} variant="contained"
                        onClick={() => handleNavigation('back')}>BACK</Button>

                <Button disabled={isLastQuestions} variant="contained"
                        onClick={() => handleNavigation('next')}>NEXT</Button>

                <Button disabled={!isLastQuestions} variant="contained" color='primary'
                        onClick={handleSubmit}>SUBMIT</Button>
            </div>
        </React.Fragment>

    );
}
