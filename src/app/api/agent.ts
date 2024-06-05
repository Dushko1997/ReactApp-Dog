import axios, { AxiosError, AxiosResponse } from "axios";
import { store } from "../stores/store";
import { PaginatedResult } from "../models/Pagination/pagination";
import { toast } from "react-toastify";
import { Dogs } from "../common/types/Dogs";

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';

axios.interceptors.request.use((config) => {
    const token = store.commonStore.token;
    if (token) config.headers!.Authorization = `Bearer ${token}`;
    return config;
});

axios.interceptors.response.use(
    async (response) => {
        const pagination = response.headers["pagination"];
        if (pagination) {
            response.data = new PaginatedResult(
                response.data,
                JSON.parse(pagination)
            );
            return response as AxiosResponse<PaginatedResult<any>>;
        }
        return response;
    },
    (error: AxiosError) => {
        switch (error.response?.status) {
            case 400:
                if (typeof error.response?.data === "string") {
                    toast.error(error.response?.data);
                } else if (error.response?.data) {
                    
                }
                break;
            case 401:
                toast.error("Unauthorized");
                localStorage.removeItem("jwt");
                break;
            case 404:
                toast.error("Not found");
                break;
            case 500:
                toast.error("Server error");
                break;
            default:
                toast.error("An unexpected error occurred");
                break;
        }
        return Promise.reject(error);
    }
);

const responseBody = <T,>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T,>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T,>(url: string, body: {}) =>
        axios.post<T>(url, body).then(responseBody),
    put: <T,>(url: string, body: {}) =>
        axios.put<T>(url, body).then(responseBody),
    delete: <T,>(url: string) => axios.delete<T>(url).then(responseBody),
};

const DogAPI = {
    listBreeds: () => requests.get<Dogs[]>('/breeds'), 
    details: (id: number) => requests.get<Dogs>(`/breeds/${id}`),
    image: (imageId: string) => requests.get<{ url: string }>(`/images/${imageId}`)
};

const agent = {
    DogAPI,
};

export default agent;