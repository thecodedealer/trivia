import {Action, AnyAction, Reducer} from "redux";
import {ThunkAction} from "redux-thunk";

/**
 * Reducer interface
 */
export interface ReReducer<S, A extends Action = AnyAction> extends Reducer<S, A> {
}

/**
 * Actions interface
 */
export interface PlainAction<T, P> extends Action<T> {
    payload?: P
}

export interface AbstractThunkAction<P, R> {
    payload: P
    response: R
}

export interface BasicThunkAction<T, P, R> extends Action<T> {
    payload: P
    response: R
}

export interface FetchThunkAction<T, P, R> extends Action<T> {
    payload: P,
    response: R
}

export type PlainActionCreator<A extends PlainAction<any, any>> = (payload?: A['payload']) => {
    type: A['type']
    payload: A['payload']
}
