import { apiClient } from "./ApiClient";
import apiResponse from "./ApiResponse";

export const executeBasicAuthenticationService = (
  token: string
): Promise<apiResponse> =>
  apiClient.get(`/basic-auth`, {
    headers: {
      Authorization: token,
    },
  });

export const executeJwtAuthenticationService = (
  username: string,
  password: string
): Promise<apiResponse> =>
  apiClient.post(`/authenticate`, { username, password });
