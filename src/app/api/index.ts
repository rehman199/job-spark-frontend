import axios, { AxiosResponseHeaders } from "axios";
import { store } from "../store";
import { setTokens } from "../store/user";
import { IUserToken } from "../interfaces/user";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  function (config) {
    const tokens = store.getState().user?.tokens as IUserToken;

    if (tokens) {
      config.headers["uid"] = tokens.uid;
      config.headers["expiry"] = tokens.expiry;
      config.headers["access-token"] = tokens.access_token;
      config.headers["client"] = tokens.client;
      config.headers["token-type"] = tokens.token_type;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    if (authTokensArePresent(response.headers))
      store.dispatch(
        setTokens({
          uid: response.headers["uid"],
          expiry: response.headers["expiry"],
          access_token: response.headers["access-token"],
          client: response.headers["client"],
          token_type: response.headers["token-type"],
        })
      );

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const authTokensArePresent = (
  headers: Partial<AxiosResponseHeaders>
): boolean =>
  !!headers["client"] &&
  !!headers["uid"] &&
  !!headers["expiry"] &&
  !!headers["access-token"] &&
  !!headers["token-type"];

export default api;
