import axios, { AxiosResponseHeaders } from "axios";
import { authCookiesArePresent, getCookie } from "../utils/cookies-helper";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  function (config) {
    if (authCookiesArePresent()) {
      config.headers["uid"] = getCookie("uid");
      config.headers["expiry"] = getCookie("expiry");
      config.headers["access-token"] = getCookie("access-token");
      config.headers["client"] = getCookie("client");
      config.headers["token-type"] = getCookie("token-type");
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    if (authTokensArePresent(response.headers)) {
      addAuthTokenToCookies(response.headers);
    }

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

const addAuthTokenToCookies = (headers: Partial<AxiosResponseHeaders>) => {
  const expiryDate = new Date(headers["expiry"] * 1000).toUTCString();

  document.cookie = `uid=${headers["uid"]}; expires=${expiryDate}; path=/`;
  document.cookie = `access-token=${headers["access-token"]}; expires=${expiryDate}; path=/`;
  document.cookie = `expiry=${headers["expiry"]}; expires=${expiryDate}; path=/`;
  document.cookie = `client=${headers["client"]}; expires=${expiryDate}; path=/`;
  document.cookie = `token-type=${headers["token-type"]}; expires=${expiryDate}; path=/`;
};

export default api;
