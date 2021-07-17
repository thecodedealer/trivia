import {
    ActionTypes,
    ICloseModal,
    IOpenModal,
    IResetQuestionnaire,
    ISaveResponse, ISetCategories,
    ISetQuestion,
    ISetQuestionsAction,
    ISetStepAction, ISetSubmitted
} from "./types";
import {IQuestion} from "../../../../interfaces";

/**
 * ACTION CREATORS
 */

export const setQuestions = (payload: IQuestion[]): ISetQuestionsAction => ({
    type: ActionTypes.SET_QUESTIONS,
    payload
})

export const setStep = (payload: 1 | 2): ISetStepAction => ({
    type: ActionTypes.SET_STEP,
    payload
})

export const setQuestion = (payload: number): ISetQuestion => ({
    type: ActionTypes.SET_QUESTION,
    payload
})

export const saveResponse = (payload): ISaveResponse => ({
    type: ActionTypes.SAVE_RESPONSE,
    payload
})

export const openModal = (payload): IOpenModal => ({
    type: ActionTypes.OPEN_MODAL,
    payload
})

export const closeModal = (): ICloseModal => ({
    type: ActionTypes.CLOSE_MODAL
})

export const resetQuestionnaire = (): IResetQuestionnaire => ({
    type: ActionTypes.RESET_QUESTIONNAIRE
})

export const setCategories = (payload): ISetCategories => ({
    type: ActionTypes.SET_CATEGORIES,
    payload
})

export const setSubmitted = (): ISetSubmitted => ({
    type: ActionTypes.SET_SUBMITTED
})
