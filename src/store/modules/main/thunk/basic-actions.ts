import {ResetQuestionnaireThunk, SaveQuestionThunk, ThunkTypes} from "./types";
import {createBasicThunkAction} from "../../../helpers/createActions";
import {IRootState, RootActions} from "../../../index";
import {saveResponse} from "../plain/actions";

export const saveQuestion = createBasicThunkAction<SaveQuestionThunk, IRootState, RootActions>(
    ThunkTypes.SAVE_QUESTION,
    (payload) => (dispatch, getState) => {

        const state = getState()

        const qId = state.main.question - 1

        const currentQ = state.main.questions[qId]

        const isAnswerCorrect = currentQ.correct_answer === payload

        dispatch(saveResponse({qId, answer: payload, win: !!isAnswerCorrect}))
    }
)

export const resetQuestionnaire = createBasicThunkAction<ResetQuestionnaireThunk, IRootState, RootActions>(
    ThunkTypes.RESET,
    () => (dispatch, state) => {

    }
)
