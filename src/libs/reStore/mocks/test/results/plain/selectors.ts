import {createSelector} from 'reselect'
import {IState} from "./types";

// @ts-ignore
const selectReducer = (state): IState => state.config


export const selectTest = createSelector(selectReducer, config => config.test)
