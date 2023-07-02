import { apiClient } from "./ApiClient";
import apiResponse from "./ApiResponse";

export const registerUserService = (
  username: string,
  password: string
): Promise<apiResponse> => apiClient.post(`/users`, { username, password });

export const executeJwtAuthenticationService = (
  username: string,
  password: string
): Promise<apiResponse> =>
  apiClient.post(`/api/authenticate`, { username, password });
