<template>
    <div class="container">
        <h1>Login</h1>
        <br/>
        <form v-on:submit.prevent="getToken()">
            <label>User</label>
            <input type="text" v-model="user.email" class="form-control"/>
            <label>Password</label>
            <input type="password" v-model="user.password" class="form-control"/><br/>
            <button class="btn btn-primary">Login</button>
        </form>
        <br/>
        <p class="text-success" v-if="status === true">
            {{mensaje}}
        </p>
    </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos';
import Global from '../Global';
const service = new ServiceCubos();
    export default{
        name:"LoginComponent",
        data(){
            return{
                user:{
                    email:"",
                    password:""
                },
                token: Global.token.response,
                mensaje:"",
                status:false
            }
        },
        methods:{
            getToken(){
                console.log(this.user);
                service.getTokenLogin(this.user).then(result=>{
                    console.log(result);
                    this.status = true;
                    this.mensaje = "Te has logeado con éxito!!. Ya puedes acceder a los apartados con seguridad";
                })
            }
        }
    }
</script>
