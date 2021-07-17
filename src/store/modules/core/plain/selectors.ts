import {createSelector} from 'reselect'
import {IState} from "./types";
import {IRootState} from "../../../index";

const selectReducer = (state: IRootState): IState => state.core


export const selectConfigTest = createSelector(selectReducer, core => core.test)

