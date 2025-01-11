import path from '../constants/path'
import { AuthResponse } from '../types/auth.type'
import http from '../utils/http'

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>(path.register, body)

export const loginAccount = (body: { email: string; password: string }) => http.post<AuthResponse>(path.login, body)

export const logoutAccount = () => http.post(path.logout)
