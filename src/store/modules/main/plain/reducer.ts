import {ActionTypes, IState, PlainActions} from "./types";
import {ReReducer} from "../../../../libs/reStore";

/**
 * REDUCER
 * first define and export reducer name as reducerName
 * then define and export initial state as initialState
 * last create the reducer which will be type ReReducer
 */

export const reducerName = 'main';

export const initialState: IState = {
    submitted: false,
    categories: [],
    questions: [],
    step: 1,
    question: 1,

    questionnaire: {
        responses: {},
        score: 0
    },

    modal: {
        open: false,
        title: '',
        content: ''
    }
}

export const reducer: ReReducer<IState, PlainActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_QUESTIONS: {
            state.questions = action.payload
            break
        }

        case ActionTypes.SET_STEP: {
            state.step = action.payload
            break
        }

        case ActionTypes.SET_QUESTION: {
            state.question = action.payload
            break
        }

        case ActionTypes.SAVE_RESPONSE: {
            const {qId, answer, win} = action.payload

            const responses = state.questionnaire.responses

            if (!!responses[qId] && !!responses[qId].win && !win)
                state.questionnaire.score -= 1

            state.questionnaire.responses[qId] = {answer, win}

            if (win)
                state.questionnaire.score += 1

            break
        }

        case ActionTypes.OPEN_MODAL: {
            const {title, content} = action.payload
            state.modal.open = true

            state.modal.title = title
            state.modal.content = content

            break
        }

        case ActionTypes.CLOSE_MODAL: {
            state.modal.open = false
            break
        }

        case ActionTypes.RESET_QUESTIONNAIRE: {
            state.questions = []
            state.step = 1
            state.question = 1
            state.submitted = false

            state.questionnaire = {
                responses: {},
                score: 0
            }

            break
        }

        case ActionTypes.SET_CATEGORIES: {
            state.categories = action.payload
            break
        }

        case ActionTypes.SET_SUBMITTED: {
            state.submitted = true
            break
        }

        default: {
            return state
        }
    }
}
