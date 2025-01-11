import { User } from '../types/user.type'

export const setAccessTokenFromLocalStorage = (token: string) => {
  localStorage.setItem('access_token', token)
}

export const clearAccessTokenFromLocalStorage = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem('access_token') || ''
}

export const getProfileFromLocalStorage = () => {
  const profile = localStorage.getItem('profile')
  return profile ? JSON.parse(profile) : null
}

export const setProfileToLocalStorage = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
