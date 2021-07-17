

/**
 * THUNK TYPES
 */
import {BasicThunkAction} from "../../../../interfaces";

export enum ThunkTypes {
    TEST_THUNK = 'test/thunk/TEST_THUNK',
}


/**
 * THUNK ACTION TYPES
 */
export type TestThunkAction = BasicThunkAction<ThunkTypes.TEST_THUNK, number, Promise<number>>

/**
 * Create an UNION action types as ThunkActions
 */
export type ThunkActions =
    | TestThunkAction
