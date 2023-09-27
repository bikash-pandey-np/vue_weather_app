<template>
    <div class="search">
        <input type="text" class="search_input" placeholder="Enter City" v-model="city" @keyup.enter="handleEnter" />
    </div>
    <WeatherResult v-if="hasData" :data="data" />
</template>

<script>
import api from '../api';
import WeatherResult from './WeatherResult.vue';

export default {
    name: 'WeatherApp',
    components: {
        WeatherResult,
    },

    data() {
        return {
            city: '',
            hasData: false,
            data: {}
        }
    },
    methods: {
        async handleEnter() {
            if (this.city.length > 0) {
                await api.get(`/weather`, {
                    params: {
                        q: this.city,
                        appid: 'f7058c89155a2556624de22c82eb964b'
                    }
                })
                    .then((res) => {
                        this.hasData = true;
                        this.data = res.data;
                        console.log(res);
                    })
                    .catch(error => {
                        if (error.response.data.cod == 404) {
                            this.$toast.error('City not found');
                            this.data = {}
                            this.city = ''
                            this.hasData = false
                        }

                    })
            }
            else {
                alert('enter city')
            }
        }
    }
}
</script>

<style>
.search_input {
    font-size: 14pt;
    letter-spacing: 1px;
    padding: 4px 8px;
}
</style>