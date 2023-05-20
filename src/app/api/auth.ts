import { AxiosResponse } from "axios";
import api from ".";
import { SignIn, SignUp } from "../constants/api routes/auth";

export const signUp = async <T>(data: T): Promise<AxiosResponse<any>> =>
  await api.post(SignUp, data);

export const signIn = async <T>(data: T): Promise<AxiosResponse<any>> =>
  await api.post(SignIn, data);
