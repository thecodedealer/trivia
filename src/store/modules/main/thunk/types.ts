/**
 * THUNK TYPES
 */
import {BasicThunkAction, FetchThunkAction} from "../../../../libs/reStore/interfaces";
import {IQuestion, ITriviaCategory, QuestionDifficulty, QuestionType} from "../../../../interfaces";

export enum ThunkTypes {
    GET_CATEGORIES = 'main/thunk/GET_CATEGORIES',
    FETCH_QUESTIONS = 'main/thunk/FETCH_QUESTIONS',
    SAVE_QUESTION = 'main/thunk/SAVE_QUESTION',
    RESET = 'main/thunk/RESET'
}


/**
 * THUNK ACTION TYPES
 */
export type GetCategoriesThunk = FetchThunkAction<ThunkTypes.GET_CATEGORIES, null, { trivia_categories: ITriviaCategory[] }>
export type FetchQuestionsThunk = FetchThunkAction<ThunkTypes, { amount: number, difficulty?: QuestionDifficulty, type?: QuestionType, category?: number }, { response_code: number, results: IQuestion[] }>
export type SaveQuestionThunk = BasicThunkAction<ThunkTypes.SAVE_QUESTION, string, void>
export type ResetQuestionnaireThunk = BasicThunkAction<ThunkTypes.RESET, null, void>


/**
 * Create an UNION action types as ThunkActions
 */
export type ThunkActions =
    | GetCategoriesThunk
    | FetchQuestionsThunk
    | ResetQuestionnaireThunk
