import { apiClient } from "./ApiClient";
import apiResponse from "./ApiResponse";

export const retrieveAllTodosForUsernameApi = (
  username: string | null
): Promise<apiResponse> => apiClient.get(`/users/${username}/todos`);

export const deleteTodoApi = (
  username: string | null,
  id: string | null
): Promise<apiResponse> => apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (
  username: string | null,
  id: string | null
): Promise<apiResponse> => apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (
  username: string | null,
  id: string | null,
  todo: any
): Promise<apiResponse> =>
  apiClient.put(`/users/${username}/todos/${id}`, todo);

export const createTodoApi = (
  username: string | null,
  todo: any
): Promise<apiResponse> => apiClient.post(`/users/${username}/todos`, todo);
