import { AxiosResponse } from "axios";
import api from ".";
import { SignUp } from "../constants/api routes/auth";

export const signUp = async <T>(data: T): Promise<AxiosResponse<any>> => {
    return await api.post(SignUp, data);
}