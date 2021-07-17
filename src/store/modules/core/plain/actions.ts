import {
    ActionTypes,
    ITestAction,
    SetRequestCancelledAction,
    SetRequestFailedAction,
    SetRequestInitiatedAction,
    SetRequestSuccessAction
} from "./types";
import {PlainAction} from "../../../../libs/reStore";
import { resolveDynamicRequestType} from "../../../helpers/functions";

/**
 * ACTIONS CREATORS
 */


const createPlainAction = <A extends PlainAction<any, any>>(
    action: (payload: A['payload']) => ({ type: A['type'], payload: A['payload'] })
) => action


export const testAction = (value: any): ITestAction => ({
    type: ActionTypes.TEST,
    payload: value
})

export const setRequestInitiated = (): SetRequestInitiatedAction => ({
    type: ActionTypes.SET_REQUEST_INITIATED,
});

export const setRequestSuccess = createPlainAction<SetRequestSuccessAction>(
    (payload) => ({
        type: ActionTypes.SET_REQUEST_SUCCESS,
        payload
    })
)

export const setRequestFailed = createPlainAction<SetRequestFailedAction>(
    (payload) => ({
        type: ActionTypes.SET_REQUEST_FAILED,
        payload
    })
)

export const setRequestCancelled = createPlainAction<SetRequestCancelledAction>(
    (payload) => ({
        type: ActionTypes.SET_REQUEST_CANCELLED,
        payload
    })
)

export const setDynamicRequestActionInit = (actionName: string) => ({
    type: resolveDynamicRequestType(actionName, 'INIT'),
});

export const setDynamicRequestActionSuccess = (actionName: string) => ({
    type: resolveDynamicRequestType(actionName, 'SUCCESS'),
});

export const setDynamicRequestActionError = (actionName: string) => ({
    type: resolveDynamicRequestType(actionName, 'FAILED'),
});

export const setDynamicRequestActionCanceled = (actionName: string) => ({
    type: resolveDynamicRequestType(actionName, 'CANCELED')
})
