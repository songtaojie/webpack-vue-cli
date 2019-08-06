<template>
  <div class="home">
    <v-header title="首页">
      <button slot="right" @click="doLogout">退出</button>
    </v-header>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="第一个vue-cli例子"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapActions} from 'vuex'
import { USER_SIGNOUT } from "@/store/user";

export default {
  name: 'home',
  methods: {
    ...mapActions([USER_SIGNOUT]),
    doLogout(){
      this.USER_SIGNOUT();
      this.$router.replace({path:'login'})
    }
  },
  components: {
    HelloWorld
  }
}
</script>
