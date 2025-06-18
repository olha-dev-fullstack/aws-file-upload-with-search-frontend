import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public get<T = any>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.get<T>(endpoint, config);
  }

  public post<T = any>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.post<T>(endpoint, data, config);
  }

  public put<T = any>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.put<T>(endpoint, data, config);
  }

  public patch<T = any>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.patch<T>(endpoint, data, config);
  }

  public delete<T = any>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(endpoint, config);
  }
}

export const apiClient = new ApiClient();
