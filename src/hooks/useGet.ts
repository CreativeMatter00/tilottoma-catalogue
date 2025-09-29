import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
import type { AxiosError, AxiosRequestConfig } from "axios";

export const useGet = <T>(
  endpoint: string,
  queryKey: string[],
  config?: AxiosRequestConfig,
  enabled: boolean = true 
): UseQueryResult<T, AxiosError> => {
  return useQuery<T, AxiosError>({
    queryKey,
    queryFn: async () => {
      try {
        const response = await axiosInstance.get<T>(endpoint, config);
        // console.log("Get API Response: ", response);
        return response?.data;
      } catch (error) {
        const err = error as AxiosError;
        toast.error(err.message || "Failed to fetch data.");
        throw err;
      }
    },
    enabled, 
  });
};
// import { useQuery, UseQueryResult } from "@tanstack/react-query";
// import { toast } from "react-toastify";
// import { axiosInstance } from "@/helpers/axios/axiosInstance";
// import type { AxiosError, AxiosRequestConfig } from "axios";

// export const useGet = <T>(
//   endpoint: string,
//   queryKey: string[],
//   config?: AxiosRequestConfig
// ): UseQueryResult<T, AxiosError> => {
//   return useQuery<T, AxiosError>({
//     queryKey,
//     queryFn: async () => {
//       try {
//         const response = await axiosInstance.get<T>(endpoint, config);
//         console.log("Get API Response: ", response);
//         return response?.data; 
//       } catch (error) {
//         const err = error as AxiosError;
//         toast.error(err.message || "Failed to fetch data.");
//         throw err;
//       }
//     },
//   });
// };

// Make TQueryFnData the data inside dataList
// type ApiResponse<T> = {
//   dataList: T;
//   message: string;
//   statusCode: number;
// };

// export const useGet = <TData>(
//   endpoint: string,
//   queryKey: string[],
//   config?: AxiosRequestConfig
// ): UseQueryResult<TData, AxiosError> => {
//   return useQuery<TData, AxiosError>({
//     queryKey,
//     queryFn: async () => {
//       try {
//         const response = await axiosInstance.get<ApiResponse<TData>>(endpoint, config);
//         console.log("Get API Response: ", response);
//         return response.data.dataList; // TData is the shape of dataList
//       } catch (error) {
//         const err = error as AxiosError;
//         toast.error(err.message || "Failed to fetch data.");
//         throw err;
//       }
//     },
//   });
// };


// export const useGet = <T>(
//   endpoint: string,
//   queryKey: string[],
//   config?: AxiosRequestConfig // 👈 Optional config like headers, params
// ) => {
//   return useQuery({
//     queryKey,
//     queryFn: async () => {
//       try {
//         const response = await axiosInstance.get(endpoint, config);
//         console.log("Trying to get data");
//         return response;
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error("Catching error from get API");
//           toast.error(error.message || "Failed to fetch data.");
//         } else {
//           toast.error("Failed to fetch data.");
//           console.error("Failed to fetch data.");
//         }
//         throw error;
//       }
//     },
//   });
// };


// export const useGet = <T>(endpoint: string, queryKey: string[], queryParams?: Record<string, unknown>) => {
//     return useQuery<T, IGenericErrorResponse>({
//         queryKey: queryKey,
//         queryFn: async () => {
//             try {
//                 const response = await axiosInstance.get(endpoint, { params: queryParams });
//                 return response.data;
//             } catch (error) {
//                 if (error instanceof Error) {
//                     toast.error(error.message || "Failed to fetch data.");
//                 } else {
//                     toast.error("Failed to fetch data.");
//                 }
//                 throw error;
//             }
//         },
//     });
// };


