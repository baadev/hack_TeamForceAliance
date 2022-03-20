<template>
  <v-container>
    <v-row>
      <!-- left menu -->
      <v-col 
        sm="5"
        style="max-height: 860px;" 
        class="overflow-y-auto"
      >
        <v-btn @click="exportData">
          Скачать всю БД
        </v-btn>
        <v-btn @click="exportData">
          Скачать выборку
        </v-btn>

        <v-card
          v-for="item in items"
          :key="item.id"
          @click="openResume(item.id)"
          elevation="4"
          class="my-2"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                {{ item.header }}
              </div>
              <v-list-item-title class="mb-1">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="mb-4">
                {{ item.city + ", " + item.country }}
              </v-list-item-subtitle>
              
              <v-list-item-title>
                {{ item.rate }}
              </v-list-item-title>
              <v-list-item-subtitle class="mb-4">
                {{ item.update_date }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <span class="d-flex flex-column">
              <v-list-item-avatar
                size="80"
                color="grey" 
                class="d-none d-sm-flex"
              >
                  <v-img :src="item.image"></v-img>
              </v-list-item-avatar>
              <v-list-item-avatar>
                <v-btn icon @click="favorites[item.id] = !favorites[item.id]">
                  <v-icon
                    :color="favorites[item.id] ? 'red' : 'grey'"
                    v-text="'mdi-heart'"
                  ></v-icon>
                </v-btn>
              </v-list-item-avatar>
            </span>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- main view (resume) -->
      <v-col sm="7" v-if="services.data.length">
        <v-row 
          fill-height
          class="overflow-y-auto"
        >
          <v-col>
            <v-card elevation="2" v-if="resume[0]">
                <v-list-item-avatar
                  class="d-flex d-sm-none mx-auto"
                  tile
                  size="160"
                  color="grey"
                >
                  <v-img :src="resume[0].image"></v-img>
                </v-list-item-avatar>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    {{ resume[0].header + ' (' + resume[0].job + ')' }}
                  </div>
                  <v-list-item-subtitle>
                    {{ resume[0].city + ", " + resume[0].country }}
                  </v-list-item-subtitle>

                  <v-list-item-title class="mb-4">
                    {{ resume[0].rate }}
                  </v-list-item-title>

                  <v-list-item-title class="mb-1">
                    Опыт работы
                  </v-list-item-title>

                  <v-list three-line>
                    <template v-for="(ex_item, index) in resume[0].expirience">
                      <v-subheader 
                        :key="index" 
                        v-text="ex_item.title"
                      ></v-subheader>

                      <v-list-item :key="index">
                        <v-list-item-avatar>
                          {{ index }}
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title v-html="ex_item.job"></v-list-item-title>
                          <v-list-item-subtitle v-html="ex_item.description"></v-list-item-subtitle>
                          <v-list-item-subtitle>{{ 'c ' + ex_item.date_begin + ', по ' + ex_item.date_end }}</v-list-item-subtitle>
                          <span v-if="ex_item.achievements">
                            <v-list-item-title >Достижения</v-list-item-title>
                            <v-list-item-subtitle v-for="achievement in ex_item.achievements" :key="achievement.index">
                              {{ achievement.index +'. '+achievement }}
                            </v-list-item-subtitle>
                          </span>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-list>
                  
                  <v-list-item-title class="mb-1">
                    Дата создания
                  </v-list-item-title>
                  <v-list-item-subtitle class="mb-4">
                    {{ resume[0].update_date }}
                  </v-list-item-subtitle>
                  <v-list-item-title class="mb-1">
                    Дата обновления
                  </v-list-item-title>
                  <v-list-item-subtitle class="mb-4">
                    {{ resume[0].create_date }}
                  </v-list-item-subtitle>

                  <v-card>
                    <v-subheader>
                      Ключевые навыки
                    </v-subheader>

                    <v-chip 
                      v-for="tag in resume[0].tags" 
                      :key="tag.index"
                      class="ma-2"
                    >
                      {{ tag }}
                    </v-chip>
                  </v-card>
                </v-list-item-content>

                <v-list-item-avatar
                class="d-none d-sm-flex"
                  tile
                  size="160"
                  color="grey"
                >
                  <v-img :src="resume[0].image"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>

        <!-- SLIDER -->
        <v-row >
          <v-col>
            <v-card
              class="mx-auto"
              elevation="8"
              max-width="800"
            >
              <v-slide-group
                v-model="services.active[resume[0].id]"
                class="pa-4"
                multiple
              >
                <v-slide-item
                  v-for="service in services.data"
                  :key="service.index"
                  v-slot="{ active, toggle }"
                >
                  <v-card
                    :color="active ? 'green lighten-3' : ''"
                    class="ma-4"
                    width="220"
                    fill-height
                    @click="toggle"
                  >
                  <v-card-text class="mt-4" >
                    <v-row
                      class="d-flex flex-row-reverse"
                    >
                      <v-scale-transition>
                        <v-btn 
                          v-if="active"
                          absolute
                          fab
                          width="28"
                          height="28"
                          transparent="30"
                          class="mr-4"
                        >
                          <v-icon
                            size="26"
                            v-text="'mdi-check'"
                          ></v-icon>
                        </v-btn>
                      </v-scale-transition>
                    </v-row>
                      <span class="text-h5">{{ service.category + ', ' }}</span>
                      <span class="text-h6">{{ service.subcategory }}</span> <br>
                      <span>{{ service.area }}</span> <br>
                      <span>{{ service.description }}</span>
                    </v-card-text>

                    <v-card-subtitle>
                      Ключевые навыки
                    </v-card-subtitle>
                    <v-chip 
                      v-for="tag in resume[0].tags" 
                      :key="tag.index"
                      class="ma-2"
                    >
                      {{ tag }}
                    </v-chip>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <v-card-actions class="d-flex justify-end">
                <v-btn @click="services.active[resume[0].id] = ''">
                  Отправить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { 
  API_GET_ALL_RESUMES_URL, 
  API_GET_USER_BY_ID_URL,
  API_GET_RESUME_BY_ID_URL,
  API_GET_RESUME_BY_USER_ID_URL,
  API_GET_MATHING_SERVICES_URL,
} from '../api.js'
import axios from 'axios'
import download from 'downloadjs'

export default {
  data: () => ({
    items: [0],
    resume: [0],
    services: {
      active: {},
      data: {},
    },

    favorites: [0],

    dataStr: String,
  }),
  async created() {
    await axios
        .post(API_GET_ALL_RESUMES_URL)
        .then(response => (this.items = response.data['objects']));
    
    if(this.$route.params['id']) 
      this.openResume(this.$route.params['id'])
    else
      this.openResume(0)
    
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.openResume(toParams['id'])
      }
    )
  },
  methods: {
    async getUserDataById(id) {
      await axios
        .post(API_GET_USER_BY_ID_URL + '?id=' + id)
        .then(response => (this.user = response.data['user']))
    },
    async getResumeById(id) {
      await axios
        .post(API_GET_RESUME_BY_ID_URL + '?id=' + id)
        .then(response => (this.resume = response.data['objects']))
    },
    async getResumeByUserId(id) {
      await axios
        .post(API_GET_RESUME_BY_USER_ID_URL + '?id=' + id)
        .then(response => (this.resume = response.data['objects']))
    },
    async getMatchingServices(tags) {
      await axios
        .post(API_GET_MATHING_SERVICES_URL + '?' + JSON.stringify(tags))
        .then(response => (this.services.data = response.data.objects))
    },

    async openResume(id) {
      this.getResumeById(id);
      this.getMatchingServices(this.resume[0].tags);
      this.$router.replace({ path: '/home/' + id })

    },

    favoriteClick(item) {
      this.favorites[item.id] = !this.favorites[item.id];
    },
    exportData() {
      this.dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.items));
      download(this.dataStr, "resume_database.json", "text/plain");
    }
  },
}
</script>
