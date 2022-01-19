<template>
  <div v-if="result" class="about">
    <h1>This is an about page</h1>
    <p>User ID: {{ result.userId }}</p>
    <p>Title:{{ result.title }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({ result: null }),

  created() {
    let post = {
      title: "Example UTRM1",
      body: "<p>Example</>",
      userId: 1,
    };
    let update = {
      title: "2005412",
      body: "<p>2005412</>",
      userId: 1,
    };
    axios.get("https://jsonplaceholder.typicode.com/todos/4").then((result) => {
      //console.log(result.data);
      this.result = result.data;
    }),
      axios
        .post("https://jsonplaceholder.typicode.com/posts", post)
        .then((result) => {
          console.log(result);
        }),
      axios
        .put("https://jsonplaceholder.typicode.com/posts/1", update)
        .then((result) => {
          console.log(result);
        });
  },
};
</script>
