<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">StoreUT</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMain">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="navbar-item">
            <router-link to="login" class="navbar-link" v-if="!user.loggedIn">Log In</router-link>
          </li>
          <li class="navbar-item">
            <router-link to="/home" class="navbar-link" v-if="user.loggedIn">Home</router-link>
          </li>
          <li class="navbar-item">
            <router-link to="about" class="navbar-link" v-if="user.loggedIn">Search</router-link>
          </li>
          <li class="navbar-item">
            <router-link to="Logout" class="navbar-link" v-if="user.loggedIn">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import{mapGetters} from "vuex";
//import firebase from "@/firebase";
export default {
    computed:{
        ...mapGetters({
            user:"user"
        })
    }
    
}
</script>