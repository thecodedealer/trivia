import {BasicThunkAction} from "../../libs/reStore";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {CreateFetchThunkActionHooks, IApiRequestConfig} from "../interfaces/processApiRequestParams";
import {processApiRequest} from "../modules/core/thunk/abstract-actions";
import {AxiosPromise} from "axios";
import _ from 'lodash'

export const createBasicThunkAction = <T extends BasicThunkAction<any, any, any>, S, A extends Action>
(
    type: T["type"],
    action: (payload?: T['payload']) => ThunkAction<T["response"], S, undefined, A>
): (payload?: T['payload']) => ThunkAction<T['response'], S, undefined, A> => {
    return (payload?) => (dispatch, getState) => {
        // @ts-ignore
        dispatch({type})
        return dispatch(action(payload))
    }
}

export interface WrapperHooks {
    init?: () => void
    success?: () => void
    error?: () => void
    final?: () => void
}

export type CreateWrapper = (CreateWrapperParams) => WrapperHooks

export const createWrapper: CreateWrapper = (hooks) => hooks


export const resolveWrappersArray = (wrappers: WrapperHooks[], target: 'init' | 'success' | 'error' | 'final') => {

    if (!_.isEmpty(wrappers))
        for (const wrapper of wrappers) {
            if (target === 'init' && wrapper.init) wrapper.init()
            if (target === 'success' && wrapper.success) wrapper.success()
            if (target === 'error' && wrapper.error) wrapper.error()
            if (target === 'final' && wrapper.final) wrapper.final()
        }
}


export const createFetchThunkAction = <T extends BasicThunkAction<any, any, any>, S, A extends Action>
(
    type: T['type'],
    config: (payload: T['payload']) => IApiRequestConfig<T['payload']>,
    hooks?: CreateFetchThunkActionHooks<S, A, T['response']>,
    wrappers?: WrapperHooks[]
): (payload?: T['payload']) => ThunkAction<AxiosPromise, S, undefined, A> => {

    const {init, success, error, final} = hooks

    // @ts-ignore
    return (payload?: T['payload']) => {
        return async (dispatch) => {
            // @ts-ignore
            return dispatch(processApiRequest({
                actionType: type,
                requestConfig: config(payload),
                initHook: init,
                successHook: success,
                errorHook: error,
                finalHook: final,
                wrappers
            }))
        }
    }
}
