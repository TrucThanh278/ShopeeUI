import { AxiosError, HttpStatusCode, isAxiosError } from 'axios'

export function isAxiosErrorFn<T>(error: unknown): error is AxiosError<T> {
  return isAxiosError(error)
}

export function isAxiosUnprocessableEntityAxiosError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosErrorFn(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
