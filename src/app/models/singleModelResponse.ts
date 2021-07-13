import { ResponseModel } from "./responseModel";

export interface SingleModelResponse<T> extends ResponseModel{
    data:T
}