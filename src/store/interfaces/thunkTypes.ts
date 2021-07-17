import {AxiosResponse} from "axios";

export interface ISetRequestThunkAction {
    type: string,
    time: { start: number, end: number, duration: number },
    request: AxiosResponse
}
