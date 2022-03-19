<template>
    <v-row align="center" justify="center" >
        <v-col cols="5" >
            <v-card>
                <v-card-title>
                    Тип проекта
                </v-card-title>
                <v-card-text>
                    <v-radio-group v-model="projectType">
                        <v-radio label="Привлечение служащих" value="service"/>
                        <v-radio label="Мероприятие" value="event"/>
                    </v-radio-group>
                </v-card-text>
            </v-card>
            <v-card>
                <v-card-title>
                    Информация о проекте 
                </v-card-title>
                <v-card-text>
                    <v-text-field label="Название сайта" />
                    <v-textarea label="Описание" outlined />
                </v-card-text>
            </v-card>
            <v-card>
                <v-card-actions>
                    <v-card-title>
                        <span v-if="projectType === 'service'">Какие требуются служения?</span>
                        <span v-if="projectType === 'event'">Цели мероприятия:</span>
                    </v-card-title>

                    <v-spacer></v-spacer>

                    <v-btn outlined>
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-card-actions>
                <v-card-text>
                </v-card-text>
            </v-card>
            <v-card>
                <v-card-title>
                    Контакты 
                </v-card-title>
                <v-card-text>
                    <v-row v-for="type in feedback.types" :key="type.index"> 
                        <v-col cols="4">
                            <v-subheader>
                                {{ type.title }}
                            </v-subheader>
                        </v-col>
                        <v-col cols="8">
                            <v-subheader>
                                <v-text-field v-if="type.required" :rules="[rules.required]"></v-text-field>
                                <v-text-field v-else></v-text-field>
                            </v-subheader>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            projectType: "service",
            feedback: {
                types: {
                    "tel": { title: "Телефон", required: true },
                    "email": { title: "Почта", required: false },
                    "telegram": { title: "Telegram", required: false },
                }
            },
            rules: {
                required: value => !!value || 'Обязательное поле',
            }
        }
    }
}
</script>