<template>
    <v-container fill-height>
        <v-row align="center" justify="center">
            <v-card>
                <v-card-title>
                    Авторизация
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Email" v-model="form.email"/>
                        <v-text-field label="Пароль" v-model="form.password"/>
                        <v-btn @click="sendForm" :disabled="pending" block>Войти</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>
 
<script>
// import store 
import axios from 'axios';
import { API_LOGIN_URL } from '../api.js';
 
export default {
    name: 'Login',
    data() {
        return {
            pending: false,
            form: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        sendForm() {
            // this.$store.commit('isLoggedIn', { state: true })
            // this.$store.commit(
            //     'showMessage', 
            //     { show: true, content: 'Успешная авторизация', color: 'success'}
            // )
            // this.$router.push('page_settings')
            if (this.pending === false) {
                this.pending = true;
                axios.post(API_LOGIN_URL, this.form)
                    .then(response => {
                        this.$store.commit(
                            'isLoggedIn', 
                            { state: true }
                        )
                        this.$store.commit(
                            'showMessage', 
                            { show: true, content: 'Успешная авторизация', color: 'success'}
                        )
                        // this.$router.push('page_settings')
                        // TODO: redirect
                    })
                    .catch(errors => {
                            console.log('login failed with: ' + errors)
                            switch(errors.response.status) {
                                case 422:
                                    this.$store.commit(
                                        'showMessage', 
                                        { show: true, content: '...', color: 'success'}
                                    )

                            }                        
                        })
                    .then(() => {
                        this.pending = false;
                    })
            }
        },
    },
}
</script>