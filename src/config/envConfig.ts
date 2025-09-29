// QA
// export const mainURL="http://103.219.160.253";

// local
export const mainURL="http://192.168.100.29";

// UAT - LIVE
// export const mainURL="http://3.101.133.51";
export const getAuthBaseUrl = (): string => {
     return process.env.NEXT_PUBLIC_API_URL || `${mainURL}:8800/`;

}

// ? live api
 export const authBaseURL = `${mainURL}:8801/`
