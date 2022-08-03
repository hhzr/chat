import {get, getNotParam, getPath, post} from '@/util/request'

export const getVerifyCode = data => getNotParam(`/user/getVerifyCode`);
export const login = data => post(`/user/login`, data);
