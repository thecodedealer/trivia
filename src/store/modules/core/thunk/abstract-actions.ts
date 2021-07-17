import axios from "axios";
import {
    ProcessApiRequestThunkAction,
    SetRequestFailedThunkAction,
    SetRequestInitiatedThunkAction,
    SetRequestSuccessThunkAction
} from "./types";
import {IRootState, RootActions} from "../../../index";
import {createAbstractThunkAction} from "../../../helpers/createAbstractThunkAction";
import {resolveWrappersArray} from "../../../helpers/createActions";
import {
    setDynamicRequestActionCanceled,
    setDynamicRequestActionError,
    setDynamicRequestActionInit,
    setDynamicRequestActionSuccess,
    setRequestCancelled,
    setRequestFailed,
    setRequestInitiated,
    setRequestSuccess
} from "../plain/actions";

export const processApiRequest = createAbstractThunkAction<ProcessApiRequestThunkAction, IRootState, RootActions>(
    (payload) => {
        const {
            actionType,
            requestConfig,
            initHook,
            successHook,
            errorHook,
            finalHook,
            wrappers
        } = payload
        const {method, path, axiosConfig} = requestConfig;

        const start = new Date().getTime()

        return (dispatch, getState) => {
            const state = getState()

            /*
            APPLY AXIOS DEFAULT CONFIG
             */
            axios.defaults.baseURL = 'https://opentdb.com/'
            axios.defaults.timeout = 20000

            dispatch(setRequestInitiatedThunk(actionType))

            if (initHook) initHook(dispatch, state)
            resolveWrappersArray(wrappers, 'init')

            return axios[method.toLowerCase()](path, axiosConfig)
                .then(data => {
                    const end = new Date().getTime()
                    const duration = end - start
                    dispatch(setRequestSuccessThunk({type: actionType, time: {start, end, duration}, request: data}))
                    if (successHook) successHook(data, dispatch, state)
                    resolveWrappersArray(wrappers, 'success')
                })

                .catch(err => {
                    const end = new Date().getTime()
                    const duration = end - start
                    dispatch(setRequestFailedThunk({type: actionType, time: {start, end, duration}, request: err}))
                    if (errorHook) errorHook(err, dispatch, state)
                    resolveWrappersArray(wrappers, 'error')
                })
                .finally(() => {
                        if (finalHook) finalHook(dispatch, state)
                        resolveWrappersArray(wrappers, 'final')
                    }
                )
        }
    })


export const setRequestInitiatedThunk = createAbstractThunkAction<SetRequestInitiatedThunkAction, IRootState, RootActions>(
    (originalAction) => dispatch => {
        dispatch(setRequestInitiated())
        dispatch(setDynamicRequestActionInit(originalAction))
    }
)

export const setRequestSuccessThunk = createAbstractThunkAction<SetRequestSuccessThunkAction, IRootState, RootActions>(
    ({type, time, request}) => dispatch => {
        dispatch(setRequestSuccess({type, time, request}))
        dispatch(setDynamicRequestActionSuccess(type))
    }
)

export const setRequestFailedThunk = createAbstractThunkAction<SetRequestFailedThunkAction, IRootState, RootActions>(
    ({type, time, request}) => dispatch => {
        dispatch(setRequestFailed({type, time, request}))
        dispatch(setDynamicRequestActionError(type))
    }
)

export const setRequestCanceledThunk = createAbstractThunkAction<SetRequestFailedThunkAction, IRootState, RootActions>(
    ({type, time, request}) => dispatch => {
        dispatch(setRequestCancelled({type, time, request}))
        dispatch(setDynamicRequestActionCanceled(type))
    }
)

