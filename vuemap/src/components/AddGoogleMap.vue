<template>
  <div>
    <div>
      <h2>search and add a mark</h2>
      <GmapAutocomplete
      @place_changed="setPlace"
      />
      </div>
    <GmapMap
      :center="center"
      :zoom="16"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    ></GmapMap>
  </div>
</template>
<script>
export default {
  name: "AddMap",
  data() {
    return {
      center: { lat: 20.6274, lng: -87.0799 },
      currentPlace:null,
    };
  },

  mounted() {
    this.geolocate;
  },
  methods: {
    setPlace(place){
     this.currentPlace=place;
     console.log(place)
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
