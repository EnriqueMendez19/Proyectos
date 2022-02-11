<template>
    <div>
        <h2>Edit Account</h2>
        <p>
            Update the local information here in this Web Application. It won't change anything in
            the Facebook database
        </p>
        <form v-if="account" @submite.prevent="handleSubmit">
            <div>
                <label >Facebook Id</label>
                <div>{{account.facebookId}}</div>
            </div>
            <div>
                <label>full name</label>
                <input type="text" v-model="account.name">
            </div>
            <div>
                <label>Extra Info</label>
                <input type="text" v-model="account.extraInfo">
            </div>
            <div>
                <button type="submit">Save</button>
                <router-link to="../../"></router-link>
            </div>
        </form>
        <div v-if="!account">
            <span>Record not located</span>
        </div>
    </div>
</template>
<script>
import {router} from '@/_helpers';
import {accountService} from '@/_services';
export default {
    data() {
        return {
            account:null,
        }
    },
    created() {
        accountService.getById(this.$route.param.id)
        .then((x)=>(this.account));
    },
    methods: {
        handleSubmit(){
            accountService.update(this.$route.param.id, this.account)
            .then(()=>{
                router.push("../");
            })
            .catch((error)=>{
                console.log(error);
            });
        },
    },
}
</script>