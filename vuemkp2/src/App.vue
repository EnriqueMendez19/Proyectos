<template>
  <div>
    <navbar></navbar>
    <main class="py-4">
      <router-link></router-link>
    </main>
  </div>
</template>
<script>
import navbar from "./components/navbar.vue";
export default {
  components: {
    navbar,
  },
};
</script>
