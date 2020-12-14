import Cookies from 'js-cookie'
// cookie保存的天数
import config from '@/config'

export const TOKEN_KEY = 'Authorization'

const { title, cookieExpires, useI18n } = config

export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}
export const setSession = (key, token) => {
    Cookies.set(key, token, { expires: cookieExpires || 1 })
}
export const getSession = (val) => {
    const s = Cookies.get(val)
    if (s) return s
    else return false
}

export const localSave = (key, value) => {
    localStorage.setItem(key, value)
}

export const localRead = (key) => {
    return localStorage.getItem(key) || false
}