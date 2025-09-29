import {
  deleteAllCookies,
  getRefreshToken,
  refreshTokenDelete,
} from "@/actions/cookiesAction";
import { authBaseURL } from "@/config/envConfig";
import { authKey } from "@/constants/auth/storageKey";
import {
  setToLocalStorage,
} from "@/utils/local-storage";
import { redirect } from "next/navigation";

export const storeAuthInfo = (accessToken: string) => {
  return setToLocalStorage(authKey, accessToken);
};
async function removeLocal() {
  localStorage.clear();
}

export async function logout() {
  await refreshTokenDelete();
  await deleteAllCookies();
  await removeLocal();
  redirect("/");
}

export const getNewAccessToken = async (): Promise<string | undefined> => {
  try {
    const refreshToken = await getRefreshToken();

    if (!refreshToken?.value) {
      throw new Error("No refresh token available");
    }
    const formData = new URLSearchParams();
    formData.append("grant_type", "refresh_token");
    formData.append("scope", "profile");
    formData.append("refresh_token", refreshToken.value);

    const tokenResponse = await fetch(`${authBaseURL}auth-ws/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: "Basic Y2xpZW50OnNlY3JldA==",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });
    console.log(tokenResponse);
    if (!tokenResponse.ok) {
      console.log("token response is not okay");
      throw new Error(
        `Token request failed with status ${tokenResponse.status}`
      );
    }

    if (tokenResponse.status === 401) {
      logout();
    }

    const tokenData = await tokenResponse.json();
    if (!tokenData.access_token) {
      throw new Error("No access token in response");
    }

    return tokenData.access_token as string;
  } catch (error) {
    console.error("Error refreshing access token: ", error);
    return undefined;
  }
};