import Vue from "vue";
import"./style.css";

//Fake backend
import {fakeBackend} from "./_helpers";
fakeBackend();

import{
    initFacebookSdk,
       jwtInterceptor,
      errorInterceptor,
    router
    } from "./_helpers";
    import App from "./App.vue";
    //Enable Interceptor for HTTP request
    jwtInterceptor();
    errorInterceptor();

    //Wait from Facebook sdk to start app
    initFacebookSdk().then(starApp);

//Vue.config.productionTip = false;
function starApp(){
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
}