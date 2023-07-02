import { apiClient } from "./ApiClient";
import apiResponse from "./ApiResponse";

export const retrieveHelloWorldBean = (): Promise<apiResponse> =>
  apiClient.get("/hello-world-bean");

export const retrieveHelloWorldPathVariable = (
  username: string,
  token: string
): Promise<apiResponse> =>
  apiClient.get(`/hello-world/path-variable/${username}`, {
    headers: {
      Authorization: token,
    },
  });
