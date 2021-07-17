import {PlainAction} from "../../../../libs/reStore";
import {AxiosResponse} from "axios";
import {ISetRequestThunkAction} from "../../../interfaces/thunkTypes";


/**
 * STATE INTERFACE
 */
export interface IState {
    test: any,

    requests: {
        stats: {
            initiated: number;
            success: number;
            failed: number;
            canceled: number;
        },
        logs: {
            success: { [key: string]: { time: {}, request: AxiosResponse }[] };
            failed: { [key: string]: { time: {}, request: AxiosResponse }[] };
            canceled: { [key: string]: { time: {}, request: AxiosResponse }[] };
        }
    }
}

/**
 * ACTION TYPES
 */
export enum ActionTypes {
    TEST = 'core/TEST',

    SET_REQUEST_INITIATED = 'core/SET_REQUEST_INITIATED',
    SET_REQUEST_SUCCESS = 'core/SET_REQUEST_SUCCESS',
    SET_REQUEST_FAILED = 'core/SET_REQUEST_FAILED',
    SET_REQUEST_CANCELLED = 'core/SET_REQUEST_CANCELLED',
    SET_REQUEST_FINAL = 'core/SET_REQUEST_FINAL'
}


/**
 * PLAIN ACTIONS
 */

export type ITestAction = PlainAction<ActionTypes.TEST, any>

export type SetRequestInitiatedAction = PlainAction<ActionTypes.SET_REQUEST_INITIATED, { type: string }>
export type SetRequestSuccessAction = PlainAction<ActionTypes.SET_REQUEST_SUCCESS, ISetRequestThunkAction>
export type SetRequestFailedAction = PlainAction<ActionTypes.SET_REQUEST_FAILED, ISetRequestThunkAction>
export type SetRequestCancelledAction = PlainAction<ActionTypes.SET_REQUEST_CANCELLED, ISetRequestThunkAction>

export type SetDynamicRequestActionInit = PlainAction<string, null>

/**
 * Create an UNION type as PlainActions
 */
export type PlainActions = ITestAction
    | SetRequestInitiatedAction
    | SetRequestSuccessAction
    | SetRequestFailedAction
    | SetRequestCancelledAction
    | SetDynamicRequestActionInit








