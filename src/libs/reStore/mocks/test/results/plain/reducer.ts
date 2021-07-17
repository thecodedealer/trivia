import {PlainActions, ActionTypes, IState} from "./types";
import {ReReducer} from "../../../../interfaces";

/**
 * REDUCER
 * first define and export reducer name as reducerName
 * then define and export initial state as initialState
 * last create the reducer which will be type ReReducer
 */

export const reducerName = 'test';


export const initialState: IState = {
    test: null,
}

// @ts-ignore
export const reducer: ReReducer<IState, PlainActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TEST: {
            state.test = action.payload
            break
        }

        default: {
            return state
        }
    }
}
