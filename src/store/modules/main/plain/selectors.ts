import {createSelector} from 'reselect'
import {IState} from "./types";
import {IRootState} from "../../../index";

const selectReducer = (state: IRootState): IState => state.main


export const selectQuestions = createSelector(selectReducer, main => main.questions)
export const selectStep = createSelector(selectReducer, main => main.step)
export const selectQuestion = createSelector(selectReducer, main => main.question)
export const selectCurrentQuestion = createSelector(selectQuestions, selectQuestion, (questions, q) => questions[q - 1])
export const selectIsLastQuestion = createSelector(selectQuestions, selectQuestion, (questions, q) => questions.length === q)

export const selectQuestionsLength = createSelector(selectQuestions, q => q.length)

export const selectModal = createSelector(selectReducer, main => main.modal)

export const selectQuestionnaire = createSelector(selectReducer, main => main.questionnaire)

export const selectCategories = createSelector(selectReducer, main => main.categories)

export const isFormSubmitted = createSelector(selectReducer, main => main.submitted)
