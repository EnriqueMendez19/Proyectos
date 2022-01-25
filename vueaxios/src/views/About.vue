<template>
  <div v-if="weather" class="about">
    <h1>Weather</h1>
    <p>City: {{ weather.name }}</p>
    <p>Weather: {{ weather.weather[0].description }}</p>
    <p>Sky: {{ weather.weather[0].main }}</p>
    <img
      :src="'http://openweathermap.org/img/w/'+weather.weather[0].icon+'.png'"
      alt=""
    />
    <p>CoordinatesLat:{{ weather.coord.lat }}</p>
    <p>CoordinatesLon{{weather.coord.lon}}</p>
    <p>TimeZone:{{ weather.timezone }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      weather: null,
    };
  },
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=playa%20del%20carmen&APPID=af3809f99a7cd4a05a31a9d949fcbcfd"
        )
        .then((response) => {
          console.log(response);
          this.weather = response.data;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style scoped>
p{
  background-color: aqua;
  font-family: 'Times New Roman', Times, serif;
}
</style>
