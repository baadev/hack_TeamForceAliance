<template>
    <v-container fill-height>
        <v-row align="center" justify="center">
            <v-card>
                <v-card-title>
                    Регистрация
                </v-card-title>
                <v-card-subtitle v-if="registered">
                    <span>Успех!</span>
                </v-card-subtitle>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Имя" v-model="form.name"/>
                        <v-text-field label="Email" v-model="form.email"/>
                        <v-text-field label="Пароль" v-model="form.password" type="password"/>
                        <v-text-field label="Подтвердите пароль" v-model="form.password_confirmation" type="password"/>
                        <v-btn @click="sendForm" :disabled="pending" block>Регистрация</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>
 
<script>
import axios from 'axios';
import {API_REGISTRATION_URL} from '../api.js';
 
export default {
    name: 'Registration',
    data() {
        return {
            pending: false,
            registered: false,
            form: {
                email: null,
                name: null,
                password: null,
                password_confirmation: null,
            }
        }
    },
    methods: {
        sendForm() {
            if (this.pending === false) {
                this.pending = true;
                // this.registered = true;
                // this.$router.push('login');
                // this.$store.commit(
                //     'showMessage', 
                //     { show: true, content: 'Успешная регистрация', color: 'success'}
                // );
                axios.get('https://api.na-promo.ru/sanctum/csrf-cookie')
                axios.post(API_REGISTRATION_URL, this.form)
                    .then(response => {
                        this.registered = true;
                        this.$router.push('login');
                        this.$store.commit(
                            'showMessage', 
                            { show: true, content: 'Успешная регистрация', color: 'success'}
                        );
                    })
                    .catch(errors => {})
                    .then(() => {
                        this.pending = false;
                    });
            }
        }
    }
}
</script>