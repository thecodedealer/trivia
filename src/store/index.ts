import {ReSoreBuilder} from "../libs/reStore";
import thunk from "redux-thunk";

import {reducer as coreReducer, reducerName as coreReducerName} from './modules/core/plain/reducer'
import {reducer as mainReducer, reducerName as mainReducerName} from './modules/main/plain/reducer'
import {IState as IMainState, PlainActions as MainActionInterfaces} from "./modules/main/plain/types";
import {ThunkActions as MainThunkActions} from './modules/main/thunk/types'


import {IState as ICoreState, PlainActions as CorePlainActions} from './modules/core/plain/types'

export type RootPlainActions =
    | CorePlainActions
    | MainActionInterfaces

export type RootThunkActions =
    | MainThunkActions

export type RootActions = RootPlainActions | RootThunkActions

// create root state interface
export interface IRootState {
    core: ICoreState
    main: IMainState
}

const storeBuilder = new ReSoreBuilder()

//add middlewares
storeBuilder.addMiddlewares(
    thunk
)

// add modules
storeBuilder.addReducer(coreReducerName, coreReducer)
storeBuilder.addReducer(mainReducerName, mainReducer)


// create store
storeBuilder.createStore(true)


// export store builder
export {storeBuilder}





