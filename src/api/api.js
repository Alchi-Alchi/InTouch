import * as axios from "axios";
export const instance = axios.create ({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {"API-KEY": "c2f567ce-7fc3-4b67-8cde-c469247b6b42"}
});
export const usersAPI = {
  getUsers(page, pageSize) {
    return instance.get (`users?page=${page}&count=${pageSize}`).then (response => response.data)
  },
  follow (userID) {
    return instance.post (`follow/${userID}`)
  },
  unfollow (userID) {
    return instance.delete (`follow/${userID}`)
  },
};
export const profileAPI = {
  getProfile (userID) {
    return instance.get (`profile/` + userID);
  },
  getStatus (userID) {
    return instance.get (`profile/status/` + userID);
  },
  updateStatus (status) {
    return instance.put (`profile/status/`, {status: status});
  },
  savePhoto (photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put (`profile/photo/`, formData, {headers: {'Content-Type': 'multipart/form-data'}});
  },
  saveProfile (profile) {
    return instance.put (`profile`, profile);
  }
};
export const authAPI = {
  me () {
   return instance.get (`auth/me`);
  },
  login (email, password, rememberMe = false, captcha = null) {
    return instance.post (`auth/login`, {email, password, rememberMe, captcha});
   },
  logout () {
    return instance.delete (`auth/login`);
  },
};
export const securityAPI = {
  getCaptchaURL () {
    return instance.get (`security/get-captcha-url`);
  },
};