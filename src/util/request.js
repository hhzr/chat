import axios from "axios";
import { Dialog } from "vant";

axios.defaults.baseURL = 'http://192.168.5.145:39112';
axios.defaults.timeout = 5000;
axios.defaults.timeoutErrorMessage = '连接超时';

// response interceptor
axios.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
            Dialog.alert({
                title: '遇到了一些问题',
                message: res.message || '程序开小差了,等一下在试试吧!!!',
                theme: 'round-button',
            }).then(() => {
                // on close
            });
            // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
            //     // to re-login
            //     MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
            //         confirmButtonText: 'Re-Login',
            //         cancelButtonText: 'Cancel',
            //         type: 'warning'
            //     }).then(() => {
            //         store.dispatch('user/resetToken').then(() => {
            //             location.reload()
            //         })
            //     })
            // }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log(error)
        Dialog.alert({
            title: '遇到了一些问题',
            message: error.message,
            theme: 'round-button',
        }).then(() => {
            // on close
        });
        return Promise.reject(error)
    }
)

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}

export function getNotParam(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}


export function getPath(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export default axios