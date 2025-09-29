"use client";

import { getAuthBaseUrl } from "@/config/envConfig";
import { authKey } from "@/constants/auth/storageKey";
import { getNewAccessToken } from "@/services/auth.service";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage"
import axios from "axios";

export const instance = axios.create({
  baseURL: getAuthBaseUrl(),
  timeout: 60000,
});

// ========================= REQUEST INTERCEPTOR =====================
instance.interceptors.request.use(
  (config) => {
    const token = getFromLocalStorage("authToken");
    // const token = getFromLocalStorage("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ==================== RESPONSE INTERCEPTOR =====================
instance.interceptors.response.use(
  (response) => {
    return response; //! Return the original AxiosResponse
    // return response.data; //! if changed need to change post.service.ts
  },

  async function (error) {
    const config = await error.config;
    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      console.log("Access token is not available");

      const newAccessToken = await getNewAccessToken();

      config.headers["Authorization"] = `Bearer ${newAccessToken}`;

      if (newAccessToken) {
        setToLocalStorage(authKey, newAccessToken);
      } else {
        console.error("Failed to set access token: response is undefined");
      }

      return instance(config);
    }

    // else {
    //   const responseObject: IGenericErrorResponse = {
    //     statusCode: error?.response?.data?.statusCode || 500,
    //     message: error?.response?.data?.message || "Something went wrong",
    //     errorMessages: error?.response?.data?.message,
    //   };
    //   return Promise.reject(responseObject);
    // }
  }
);

export { instance as axiosInstance };
