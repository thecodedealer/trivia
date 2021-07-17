/**
 * STATE INTERFACE
 */
import {PlainAction} from "../../../../interfaces";


export interface IState {
    test: any
}

/**
 * PLAIN TYPES
 */
export enum ActionTypes {
    TEST = 'test/TEST',
}

/**
 * PLAIN ACTION TYPES
 */

export type ITestAction = PlainAction<ActionTypes.TEST, any>


/**
 * Create an UNION action types as PlainActions
 */
export type PlainActions =
    | ITestAction

