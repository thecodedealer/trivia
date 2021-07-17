import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../store/modules/main/plain/actions";
import {selectQuestionsLength} from "../../store/modules/main/plain/selectors";

export const Timer = () => {
    const dispatch = useDispatch()

    const questions = useSelector(selectQuestionsLength)

    const [counter, setCounter] = useState(questions * 60)

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

        if (!counter)
            dispatch(openModal({
                tile: 'TIME LIMIT REACHED',
                content: 'You reached the time limit',
                withoutClose: true
            }))
        return () => clearInterval(timer);
    }, [dispatch, counter])

    return (
        <>
            Timer {new Date(counter * 1000).toISOString().substr(11, 8)}
        </>
    )
}

