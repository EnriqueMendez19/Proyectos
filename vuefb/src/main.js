import Vue from "vue";
import"./style.css";

//Fake backend
import {fakeBackend, jwtInterceptor} from "./_helpers";
fakeBackend();

import{initFacebookSdk,
       jwInterceptor,
      errorInterceptor,
    router} from "./_helpers";
    import {App} from "./App.vue";
    //Enable Interceptor for HTTP request
    jwtInterceptor();
    errorInterceptor();

    //Wait from Facebook sdk to start app
    initFacebookSdk();

//Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
