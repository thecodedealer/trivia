import {AbstractThunkAction} from "../../libs/reStore/interfaces";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";


/**
 * Create abstract thunk action
 *
 * @param action
 */
export const createAbstractThunkAction = <T extends AbstractThunkAction<any, any>, S, A extends Action>
(
    action: (payload: T['payload']) => ThunkAction<T["response"], S, undefined, A>
) => {
    return action
}
