<template>
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" top right>
        {{ snackbar.message }}
        <template v-slot:action="{ attrs }">
            <v-btn
                text
                v-bind="attrs"
                @click="snackbar.show = false"
            >
            Закрыть
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: "SnackBar",
    data: () => ({
      snackbar: {
        show: false,
        message: '',
        color: ''
      },
    }),
    created () {
        this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'showMessage') {
            this.snackbar.message = state.snackbar.content
            this.snackbar.color = state.snackbar.color
            this.snackbar.show = true
        }
        })
    }
}
</script>