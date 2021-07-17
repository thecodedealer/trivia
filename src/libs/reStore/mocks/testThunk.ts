import {ThunkAction} from 'redux-thunk'

type VoidThunkAction = ThunkAction<void, any, undefined, any>

type ReturnThunkAction<R> = ThunkAction<R, any, undefined, any>;

type ReturnAsyncThunkAction<R> = ThunkAction<Promise<R>, any, undefined, any>

export const testThunk = (payload: number): VoidThunkAction => {
    return async (dispatch, getState) => {
        const state = getState()

        const addSync = dispatch(testReturn(payload))

        const addAsync = await dispatch(testAsync(payload))


        console.log({payload, addSync, addAsync})

        // dispatch(testConfig(addSync))

    }
}

export const testReturn = (num: number): ReturnThunkAction<number> => {
    return (dispatch) => {
        return num + 1
    }
}

export const testAsync = (num: number): ReturnAsyncThunkAction<number> => {
    return () => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(num + 1)
            }, 3000)
        })
    }
}
