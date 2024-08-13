import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { AuthService } from './authService';

// Create an instance of axios
const api: AxiosInstance = axios.create({
    //baseURL: 'http://trycloud-api.traetelo.me:8091',
    baseURL: 'https://api.trycloud.io',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
    },
});

// Add a request interceptor
api.interceptors.request.use(
    (config: any) => {
        const accessToken = AuthService.authModel?.token;
        if (config.headers.Authorization === undefined && accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => Promise.resolve(response),
    async (error: AxiosError) => {
        // If there is an error, and it's a 401. Try to refresh the token.
        if (error.config && error.response && error.response.status === 401) {
            const originalRequest = error.config;
            try {
                // Call API to refresh the access token.
                const response = await api.post('/apiToken/add', null, {
                    headers: {
                        Authorization: `Bearer ${AuthService.authModel.refreshToken}`
                    }
                });
                // If there is no data, throw an error.
                if (!response.data.data) {
                    throw new Error('No data in response');
                }
                // Select data from response.
                const { access_token, refresh_token } = response.data.data;
                // If no access token or refresh token, return error message.
                if (!access_token || !refresh_token) {
                    throw new Error('No token in response');
                }
                // Save the tokens to local storage and set auth model.
                AuthService.setAuthModel({
                    token: access_token,
                    refreshToken: refresh_token,
                    isAnonimo: AuthService.authModel.isAnonimo
                });
                // Retry the original request with the new access token.
                const BEARER = 'Bearer ';
                originalRequest!.headers!.Authorization = BEARER + AuthService.authModel.token;
                return api(originalRequest!);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

// Interface for the API response.
export interface ApiResponse {
    status: number;
    error?: {
        number: number;
        message: string;
    },
    executionTime: number;
    data: any;
}

// Function to make an API request.
export async function makeRequest(method: 'get' | 'post' | 'put' | 'delete', url: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<ApiResponse> {
    try {
        let response;
        switch (method) {
            case 'get':
                response = await api.get(url, config);
                break;
            case 'post':
                response = await api.post(url, data, config);
                break;
            case 'put':
                response = await api.put(url, data, config);
                break;
            case 'delete':
                response = await api.delete(url, config);
                break;
            default:
                throw new Error(`Unsupported method: ${method}`);
        }
        return {
            status: response.status,
            error: response.data.error,
            executionTime: response.data.executionTime,
            data: response.data.data
        };
    } catch (error: any) {
        if (error.response) {
            return {
                status: error.response.status,
                error: error.response.data.error,
                executionTime: error.response.data.executionTime,
                data: error.response.data.data
            };
        }
        throw error;
    }
}

export const HttpMethods = {
    GET: 'get' as 'get',
    POST: 'post' as 'post',
    PUT: 'put' as 'put',
    DELETE: 'delete' as 'delete'
}
