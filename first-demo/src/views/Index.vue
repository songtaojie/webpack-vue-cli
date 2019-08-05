<style lang="scss" scoped>

</style>
<template>
    <div>
        <v-header title="首页">
            <router-link slot="right" v-if="user.id" to="/home">{{user.name}}</router-link>
        </v-header>
        <div class="login-msg" v-if="!user.id">
            <router-link to="/login">您还未登录,请先登录!</router-link>
        </div>
        <div class="" v-if="user.id">
            <img width="50" :src="logo"><br>登陆成功!
        </div>
    </div>
</template>
<script>
import mapState from 'vuex'
import logo from '../assets/logo.png'
export default {
    data() {
        return {
            logo
        }
    },
    computed: mapState({user:state.user}),
}
</script>