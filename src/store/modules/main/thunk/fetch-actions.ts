import {createFetchThunkAction} from "../../../helpers/createActions";
import {FetchQuestionsThunk, GetCategoriesThunk, ThunkTypes} from "./types";
import {IRootState, RootActions} from "../../../index";
import {setCategories, setQuestions, setStep} from "../plain/actions";

export const getTriviaCategories = createFetchThunkAction<GetCategoriesThunk, IRootState, RootActions>(
    ThunkTypes.GET_CATEGORIES,
    (data) => ({
        method: 'GET',
        path: 'api_category.php',
        data
    }),
    {
        success: (res, dispatch, state) => {
            dispatch(setCategories(res.data.trivia_categories))
        },
        error: (response) => {
        }
    }
)

export const fetchQuestions = createFetchThunkAction<FetchQuestionsThunk, IRootState, RootActions>(
    ThunkTypes.FETCH_QUESTIONS,
    (params) => ({
        method: 'GET',
        path: 'api.php',
        axiosConfig: {
            params
        }
    }),
    {
        success: (res, dispatch, state) => {
            dispatch(setQuestions(res.data.results))
            dispatch(setStep(2))
        },
        error: (response) => {
        }
    }
)

