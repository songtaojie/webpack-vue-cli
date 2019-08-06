<style lang="scss" scoped>

</style>
<template>
    <div>
        <v-header title="主页">
            <router-link slot="right" v-if="user.userName" to="/home">{{user.userName}}</router-link>
        </v-header>
        <div class="login-msg" v-if="!user.userName">
            <router-link to="/login">您还未登录,请先登录!</router-link>
        </div>
        <div class="" v-if="user.userName">
            <img width="50" :src="logo"><br>登陆成功!
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import logo from '../assets/logo.png'
export default {
    data() {
        return {
            logo
        }
    },
    computed: mapState({user:state=>state.user}),
}
</script>