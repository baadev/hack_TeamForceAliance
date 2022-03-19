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
        <v-btn @click="initMetaMask">
            <v-icon :color="!!connectedToBSC ? 'green':'red' ">mdi-circle</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "AppBar",

    data() {
        return {
            connectedToBSC: false,
        }
    },
    created() {
        if (ethereum !== undefined)
            this.connectedToBSC = ethereum.isConnected();
    },
    methods: {
        async initMetaMask() {
            if (ethereum !== undefined) {
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
            }
            this.connectedToBSC = !!account;

            this.$store.commit(
                'showMessage', 
                this.connectedToBSC ?
                    { show: true, content: 'Успешное подключение', color: 'success'} :
                    { show: true, content: 'Ошибка подключения', color: 'error'}
            );
        }
    },
}
</script>