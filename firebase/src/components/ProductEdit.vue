<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3>Update product</h3>
      <form @submit.prevent="onUpdateForm">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="product.name"
            required
          />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input
            type="text"
            class="form-control"
            v-model="product.price"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">Update Product</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      product: [],
    };
  },
  created() {
    let dbref = db.collection("products").doc(this.$route.params.id);
    dbref
      .get()
      .then((doc) => {
        this.product = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.collection("products")
        .doc(this.$route.params.id)
        .update(this.product)
        .then(() => {
          alert("Product sucessfully updated!");
          this.$route.push("/List");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
