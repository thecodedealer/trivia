import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {ThunkDispatch} from "redux-thunk";
import {Action} from "redux";
import {WrapperHooks} from "../helpers/createActions";

interface IRequestParams {
    [key: string]: any;
}

export interface IApiLogObject {
    [key: string]: AxiosResponse;
}

export type RequestHttpMethods = 'GET' | 'POST';

export interface IApiRequestConfig<P> {
    method: RequestHttpMethods;
    path: string;
    data?: P;
    axiosConfig?: AxiosRequestConfig;
}

export type ProcessApiRequestParams<P> = {
    actionType: string
    requestConfig: IApiRequestConfig<P>
    initHook?: (dispatch, state) => void
    successHook?: (res, dispatch, state) => void
    errorHook?: (err, dispatch, state) => void
    finalHook?: (dispatch, state) => void
    wrappers: WrapperHooks[]
}

export interface CreateFetchThunkActionHooks<S, A extends Action, R> {
    init?: (dispatch: ThunkDispatch<S, undefined, A>, state: S) => void
    success?: (res: AxiosResponse<R>, dispatch: ThunkDispatch<S, undefined, A>, state: S) => void,
    error?: (err: AxiosError, dispatch: ThunkDispatch<S, undefined, A>, state: S) => void,
    final?: (dispatch: ThunkDispatch<S, undefined, A>, state: S) => void,
}
