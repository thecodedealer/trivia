import {ActionTypes, ITestAction} from "./types";

/**
 * ACTION CREATORS
 */

export const testAction = (payload: any): ITestAction => ({
    type: ActionTypes.TEST,
    payload
})
