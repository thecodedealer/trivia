/**
 * THUNK TYPES
 */

import {IRootState} from "../../../index";
import {ProcessApiRequestParams} from "../../../interfaces/processApiRequestParams";
import {PlainActions} from "../plain/types";
import {BasicThunkAction} from "../../../../libs/reStore";
import {AbstractThunkAction} from "../../../../libs/reStore/interfaces";
import {AxiosPromise, AxiosResponse} from "axios";
import {ISetRequestThunkAction} from "../../../interfaces/thunkTypes";

export enum ThunkTypes {
    TEST_THUNK = 'core/thunk/TEST_THUNK',
    SET_REQUEST_INITIATED = 'core/thunk/SET_REQUEST_INITIATED'
}

/**
 * THUNK ACTIONS
 */
export type TestThunkAction = BasicThunkAction<ThunkTypes.TEST_THUNK, undefined, void>

export type ProcessApiRequestThunkAction = AbstractThunkAction<ProcessApiRequestParams<any>, AxiosPromise>

export type SetRequestInitiatedThunkAction = AbstractThunkAction<string, void>

export type SetRequestSuccessThunkAction = AbstractThunkAction<ISetRequestThunkAction, void>

export type SetRequestFailedThunkAction = AbstractThunkAction<ISetRequestThunkAction, void>


/**
 * Create an UNION type as RootThunkActions
 */
export type ThunkActions =
    | TestThunkAction

