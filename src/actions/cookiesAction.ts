"use server";

import { cookies } from "next/headers";

export async function refreshTokenCreate(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("refreshToken", token);
  console.log("refresh token stored within cookie", token);
}
export async function getRefreshToken() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken");
  return refreshToken;
}

export async function refreshTokenDelete() {
  (await cookies()).delete("refreshToken");
}

export async function deleteAllCookies() {
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll(); // Get all cookies

  allCookies.forEach((cookie) => {
    cookieStore.delete(cookie.name); // Delete each cookie
  });
}

