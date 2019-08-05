import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN'//登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT'//退出成功

export default{
    state:JSON.parse(sessionStorage.getItem('user')) || {},
    mutations:{
        [USER_SIGNIN](state,user){
            sessionStorage.setItem('user',JSON.stringify(user));
            Object.assign(state,user)
        },
        [USER_SIGNOUT](state){
            sessionStorage.removeItem('user')
        }
    }
}