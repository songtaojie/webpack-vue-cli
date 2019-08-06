<style lang="scss" scoped>

</style>

<template>
  <div>
    <v-header title="登录">
      <router-link slot="left" to="/">返回</router-link>
    </v-header>
    <div class="container">
      <form  @submit.prevent="doLogin" class="mx-auto py-5" style="width:320px;">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="请输入用户名" v-model="form.userName" />
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="请输入密码" v-model="form.passWord" />
        </div>
        <button class="btn btn-primary w-100" type="submit">登陆</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { USER_SIGNIN } from "../store/user";
export default {
  data() {
    return {
      submit: false,
      form: {
        userName: "",
        passWord: ""
      }
    };
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    doLogin() {
      this.submit = true;
      if (!this.form.userName && !this.form.passWord) return;
      this.USER_SIGNIN(this.form);
      this.$router.replace(this.$route.query.redirect || "/");
    }
  }
};
</script>
