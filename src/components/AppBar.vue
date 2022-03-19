<template>
    <v-app-bar app dark class="flex-grow-0">
        <v-img
            alt="NA Logo"
            class="shrink mr-2"
            src="./../assets/LogoSpaceBIG_white.png"
            transition="scale-transition"
            width="300"
        />
        <v-spacer/>
        <div>
            <v-icon v-if="connectedToBSC" color="green">mdi-circle</v-icon>
            <v-icon v-else color="red">mdi-circle</v-icon>
        </div>
        <div v-if="session.loggedIn">
            <span class="mr-4">{{ session.username }}</span> 
            <v-btn icon>
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </div>
        <template v-slot:extension v-if="session.loggedIn">
            <v-row align="center" justify="center">
                <v-btn-toggle v-model="active_tab">
                    <v-btn to="/page_settings">
                        Настройки сайта
                    </v-btn>
                    <v-btn to="/applications">
                        Заявки
                    </v-btn>
                </v-btn-toggle>
            </v-row>
        </template>
    </v-app-bar>
</template>

<script>
// import store from './../storage.js'

export default {
    name: "AppBar",

    data() {
        return {
            connectedToBSC: false,
            session: this.$store.state.session,
            active_tab: 0,
        }
    },
    created() {
      this.$store.subscribe((mutation, state) => {
          if (mutation.type === 'setActiveTab') {
              this.active_tab = state.active_tab
          }
      })  
    },
    watch: {
        // active_tab: function(val) {store.setActiveTab(val)}
    }
}
</script>