<template>
  <v-app>
    <app-bar/>

    <v-main>
        <!-- <router-link to="/login">Login </router-link>
        <router-link to="/registration">Registration </router-link>
         -->
        <router-view></router-view>

        <snack-bar/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import SnackBar from './components/SnackBar.vue'

export default {
  name: 'App',

  components: {
    AppBar,
    SnackBar,
  },
};
</script>
