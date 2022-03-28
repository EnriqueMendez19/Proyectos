<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <h2 class="card-header badge bg-info text-dark">FreeMark</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="prod in products" :key="prod.key">
                  <td>{{prod.name}}</td>
                  <td>{{prod.price}}</td>
                  <td>
                      <router-link :to="{name:'Edit Product',params:{id:prod.key}}" class="btn btn-primary">Edit</router-link>
                      <button @click.prevent="deleteProduct(prod.key)" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>
<script>
import {db} from "../firebase";
export default {
    data() {
        return {
            products:[]
        };
    },created() {
        db.collection('products').onSnapshot((snapShotChange)=>{
            this.products=[];
            snapShotChange.forEach((doc)=>{
                this.products.push({
                 key:doc.id,
                 name:doc.data().name,
                 price:doc.data().price
                });
            })
        });
        
    },
    methods: {
        deleteProduct(id){
            if(window.confirm("Do you really want to delete?")){
               db.collection("products").doc(id).delete().then(()=>{
                   alert("Document deleted!")
               }).catch((error)=>{
                   console.log(error);
               })
            }
        }
    },
}
</script>
<style>
.btn-primary{
   margin-right: 12px;
}
</style>