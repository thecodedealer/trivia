import {PlainActions, ActionTypes, IState} from "./types";
import {ReReducer} from "../../../../libs/reStore";

/**
 * REDUCER
 * first define and export reducer name as reducerName
 * then define and export initial state as initialState
 * last create the reducer which will be type ReReducer<IState, PlainActions>
 */

export const reducerName = 'core';


export const initialState: IState = {
    test: null,

    requests: {
        stats: {
            initiated: 0,
            success: 0,
            failed: 0,
            canceled: 0,
        },
        logs: {
            success: {},
            failed: {},
            canceled: {},
        },
    },
}

export const reducer: ReReducer<IState, PlainActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TEST: {
            state.test = action.payload
            break
        }

        case ActionTypes.SET_REQUEST_INITIATED: {
            ++state.requests.stats.initiated
            break;
        }

        case ActionTypes.SET_REQUEST_SUCCESS: {
            ++state.requests.stats.success

            // log request
            const url = action.payload.request.config.url

            const item = {
                time: action.payload.time,
                request: action.payload.request
            }

            if (state.requests.logs.success[url])
                state.requests.logs.success[url].push(item)
            else
                state.requests.logs.success[url] = [item]

            break
        }

        case ActionTypes.SET_REQUEST_CANCELLED: {
            ++state.requests.stats.canceled

            // log request
            const url = action.payload.request.config.url

            const item = {
                time: action.payload.time,
                request: action.payload.request
            }

            if (state.requests.logs.canceled[url])
                state.requests.logs.canceled[url].push(item)
            else
                state.requests.logs.canceled[url] = [item]
            break
        }

        case ActionTypes.SET_REQUEST_FAILED: {
            ++state.requests.stats.failed

            // log request
            const url = action.payload.request.config.url

            const item = {
                time: action.payload.time,
                request: action.payload.request
            }

            if (state.requests.logs.failed[url])
                state.requests.logs.failed[url].push(item)
            else
                state.requests.logs.failed[url] = [item]
            break
        }

        default: {
            return state
        }
    }
}
