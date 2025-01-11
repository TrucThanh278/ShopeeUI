export const saveAccessTokenFromLocalStorage = (token: string) => {
  localStorage.setItem('access_token', token)
}

export const clearAccessTokenFromLocalStorage = () => {
  localStorage.removeItem('access_token')
}

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('access_token') || ''
}
