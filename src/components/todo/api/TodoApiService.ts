import { apiClient } from "./ApiClient";
import apiResponse from "./ApiResponse";

export const retrieveAllTodosForUsernameApi = (
  username: string | null
): Promise<apiResponse> => apiClient.get(`/api/users/${username}/todos`);

export const deleteTodoApi = (
  username: string | null,
  id: string | null
): Promise<apiResponse> =>
  apiClient.delete(`/api/users/${username}/todos/${id}`);

export const retrieveTodoApi = (
  username: string | null,
  id: string | null
): Promise<apiResponse> => apiClient.get(`/api/users/${username}/todos/${id}`);

export const updateTodoApi = (
  username: string | null,
  id: string | null,
  todo: any
): Promise<apiResponse> =>
  apiClient.put(`/api/users/${username}/todos/${id}`, todo);

export const createTodoApi = (
  username: string | null,
  todo: any
): Promise<apiResponse> => apiClient.post(`/api/users/${username}/todos`, todo);
