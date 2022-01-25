<template>
  <div>
    <GmapMap
      :center="{ lat: -87.0799, lng: 20.6274 }"
      :zoom="7"
      map-type-id="terrain"
      style="width:500px, heigth:300px"
    ></GmapMap>
  </div>
</template>
<script>
export default {
    name:"AddMap"
}
</script>