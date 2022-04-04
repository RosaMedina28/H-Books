<template>

<div class="background ">
   <br>
   <div class="container">
      <div class="row justify-content-center " >
         <div class="col-lg-5 justify-content-center" style="background-color:white; border-radius: 20px; ">
            
            <div class="offset-lg-2 col-lg-8 justify-content-center">
               <div class="logo animate__animated animate__bounceInDown" >
               <img  src="../../assets/hh.png" class="card-img-top" width="10px" height="">
               </div>
               <form @submit.prevent="login">
                  <div class="form-group">
                     <input type="email" name="email" id="email" v-model="email" formControlName="email"  class="form-control"  placeholder="Ingrese su correo" required>
                  </div>
                  <br>
                  <div class="form-group">
                     <input type="password" name="password" id="password" v-model="pass" formControlName="password"  class="form-control"  placeholder="Ingrese su contraseña" required>
                  </div>
                  <br>
                  <div class="color">
         
                  <div class="form-group d-grid gap-2">
                     <button type="submit" class="btn btn-block button"  style="color: #ffff">Iniciar sesion</button>
                  </div>
                  </div>
               </form>
                  </div>
                  <br>
                  <div class="deco">
                  <div class="form-group text-center">
                     <a class="text-black link" href="/registro" style="color: #320000"><b>Registrarme</b></a>
                  </div>
                  </div>
                  <br>
               </div>
            
         </div>
         <br>
      </div>
   </div>
   

    
</template>



<style>

.animate__animated.animate__bounceInDown {
  --animate-duration: 2s;
}

.background {
    background-image: url("../../assets/fondo.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}

.link{
	text-decoration: none;
}
.logo{
width: 270px;
height: 270px;
margin-left: auto; 

margin-right: auto;
}
.color 
{
   background-color:#320000 ;
   color: #ffff;
}
.deco {
   text-decoration: underline;
}
</style>

<script>
import Swal from 'sweetalert2'
import axios from "axios";
import VueCookies from 'vue-cookies'
export default {
    
    data(){
        return {
            user:{},
            email:"",
            pass:""
        }
    },
    methods:{

      async login(){
            
            await axios.post('http://127.0.0.1:8000/api/login',{
               email:this.email,
               password:this.pass
            }).then(response=>{
                  if(response.data.status){
                     
                     VueCookies.set('user',response.data) 
                     Swal.fire(
                        'Bienvenido a H-books',
                        '',
                        'success'
                     )
                     this.$router.push({path:'/'})
                 //mandar al login
               }
               else{
                  Swal.fire(
                        'Algo salio mal',
                        'Vuelva intentarlo mas tarde',
                        'error'
                     )
               }
            }).catch(error=>{
               console.log(error)
               Swal.fire(
                        'Correo o contraseña incorrecto',
                        '',
                        'error'
               )
            })
        },
    }
}
</script>