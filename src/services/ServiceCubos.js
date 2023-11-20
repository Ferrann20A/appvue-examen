import Global from '../Global';
import axios from 'axios';

export default class ServiceCubos{
    getCubos(){
        return new Promise(function(resolve){
            let request = "api/cubos";
            let url = Global.URL_ApiCubos + request;
            let cubos = [];
            axios.get(url).then(response=>{
                cubos = response.data;
                resolve(cubos);
            })
            return cubos;
        })
    }

    findCuboById(idCubo){
        return new Promise(function(resolve){
            let request = `api/cubos/${idCubo}`;
            let url = Global.URL_ApiCubos + request;
            let cubo = {};
            axios.get(url).then(response=>{
                cubo = response.data;
                resolve(cubo)
            })
            return cubo;
        })
    }

    getMarcas(){
        return new Promise(function(resolve){
            let request = "api/cubos/marcas";
            let url = Global.URL_ApiCubos + request;
            let marcas = [];
            axios.get(url).then(response=>{
                marcas = response.data;
                resolve(marcas);
            })
            return marcas;
        })
    }

    getCubosByMarca(marca){
        return new Promise(function(resolve){
            let request = `api/cubos/cubosmarca/${marca}`;
            let url = Global.URL_ApiCubos + request;
            let cubos = [];
            axios.get(url).then(response=>{
                cubos = response.data;
                resolve(cubos);
            })
            return cubos;
        })
    }

    getComentariosCuboByIdCubo(idCubo){
        return new Promise(function(resolve){
            let request = `api/comentarioscubo/getcomentarioscubo/${idCubo}`;
            let url = Global.URL_ApiCubos + request;
            let comentarios = [];
            axios.get(url).then(response=>{
                comentarios = response.data;
                resolve(comentarios);
            })
            return comentarios;
        })
    }

    getTokenLogin(user){
        return new Promise(function(resolve){
            let request = "api/manage/login";
            let url = Global.URL_ApiCubos + request;
            axios.post(url,user).then(response=>{
                Global.token = response.data.response;
                localStorage.setItem("token",response.data.response);
                console.log("Token en global: " + Global.token);
                resolve(response.data);
            })
        })
    }

    getToken(){
        return Global.token;
    }

    nuevoUsuario(usuario){
        return new Promise(function(resolve){
            let request = "api/manage/registrousuario";
            let url = Global.URL_ApiCubos + request;
            axios.post(url,usuario).then(response=>{
                usuario = response.data;
                resolve(usuario);
            })
        })
    }

    getPerfilUsuario(token){
        return new Promise(function(resolve){
            let config = {
                headers:{
                    'Authorization' : `bearer ${token}`
                }
            }
            let request = "api/manage/perfilusuario";
            let url = Global.URL_ApiCubos + request;
            let usuario = {}
            axios.get(url,config).then(response=>{
                usuario = response.data;
                resolve(usuario);
            })
            return usuario;
        })
    }

    getComprasUser(token){
        return new Promise(function(resolve){
            let config = {
                headers : {
                    'Authorization' : `bearer ${token}`
                }
            }
            let request = "api/compra/comprasusuario";
            let url = Global.URL_ApiCubos + request;
            let compras = [];
            axios.get(url,config).then(response=>{
                compras = response.data;
                resolve(compras);
            })
            return compras;
        })
    }

    nuevaCompra(token, idCubo){
        return new Promise(function(resolve){
            let config = {
                headers : {
                    'Authorization' : `bearer ${token}`
                }
            }
            let request = `api/compra/insertarpedido/${idCubo}`;
            let url = Global.URL_ApiCubos + request;
            axios.post(url,"",config).then(response=>{
                resolve(response);
            })
        })
    }

    nuevaCompra2(idCubo){
        return new Promise(function(resolve){
            let token = localStorage.getItem("token");
            let config = {
                headers : {
                    'Authorization' : `bearer ${token}`
                }
            }
            let request = `api/compra/insertarpedido/${idCubo}`;
            let url = Global.URL_ApiCubos + request;
            axios.post(url,"",config).then(response=>{
                resolve(response);
            })
        })
    }
}