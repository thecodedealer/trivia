/**
 * STATE INTERFACE
 */
import {PlainAction} from "../../../../libs/reStore";
import {IQuestion, ITriviaCategory} from "../../../../interfaces";


export interface IState {
    questions: IQuestion[]
    step: number
    question: number

    submitted: boolean

    categories: ITriviaCategory[]

    questionnaire: {
        responses: { id: { answer: boolean, win: boolean } } | {}
        score: number
    },

    modal: {
        open: boolean
        title: string
        content: string
    }
}

/**
 * PLAIN TYPES
 */
export enum ActionTypes {
    SET_QUESTIONS = 'main/SET_QUESTIONS',

    SET_STEP = 'main/SET_STEP',
    SET_QUESTION = 'main/SET_QUESTION',

    SAVE_RESPONSE = 'main/SAVE_RESPONSE',

    OPEN_MODAL = 'main/OPEN_MODAL',
    CLOSE_MODAL = 'main/CLOSE_MODAL',

    RESET_QUESTIONNAIRE = 'main/RESET_QUESTIONNAIRE',

    SET_CATEGORIES = 'main/SET_CATEGORIES',

    SET_SUBMITTED = 'main/SET_SUBMITTED'
}

/**
 * PLAIN ACTION TYPES
 */

export type ISetQuestionsAction = PlainAction<ActionTypes.SET_QUESTIONS, IQuestion[]>
export type ISetStepAction = PlainAction<ActionTypes.SET_STEP, number>
export type ISetQuestion = PlainAction<ActionTypes.SET_QUESTION, number>
export type ISaveResponse = PlainAction<ActionTypes.SAVE_RESPONSE, { qId: number, answer: string, win: boolean }>
export type IOpenModal = PlainAction<ActionTypes.OPEN_MODAL, { title: string, content: string, withoutClose?: boolean }>
export type ICloseModal = PlainAction<ActionTypes.CLOSE_MODAL, null>
export type IResetQuestionnaire = PlainAction<ActionTypes.RESET_QUESTIONNAIRE, null>
export type ISetCategories = PlainAction<ActionTypes.SET_CATEGORIES, ITriviaCategory[]>
export type ISetSubmitted = PlainAction<ActionTypes.SET_SUBMITTED, null>

/**
 * Create an UNION action types as PlainActions
 */
export type PlainActions =
    | ISetQuestionsAction
    | ISetStepAction
    | ISetQuestion
    | ISaveResponse
    | IOpenModal
    | ICloseModal
    | IResetQuestionnaire
    | ISetCategories
    | ISetSubmitted


