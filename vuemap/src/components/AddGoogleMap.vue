<template>
  <div>
    <div>
      <h2>search and add a mark</h2>
      <GmapAutocomplete
      @place_changed="setPlace"
      />
      <button @click="addMarker">AddPlace</button>
      </div>
    <GmapMap
      :center="center"
      :zoom="16"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
    <GmapMarker>
      :key="index"
      v-for="(m, index)in markers"
      :position="m.position"
      @click="center=m.position"
    </GmapMarker>
    </GmapMap>
  </div>
</template>
<script>
export default {
  name: "AddMap",
  data() {
    return {
      center: { lat: 20.6274, lng: -87.0799 },
      currentPlace:null,
      markers:[],
      places:[]

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
    AddMarker(){
     if(this.currentPlace){
       const marker={
         lat:this.currentPlace.geometry.location.lat(),
         lng:this.currentPlace.geometry.location.lng()
       };
       this.markers.push({position:marker});
       this.places.push(this.currentPlace);
       this.center=marker;
       this.currentPlace=null;
     }
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
