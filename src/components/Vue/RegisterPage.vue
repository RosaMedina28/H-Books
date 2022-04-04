<template>

<div class="background ">
   <br>
   <div class="container">
      <div class="row justify-content-center " >
         <div class="col-lg-5 justify-content-center" style="background-color:white; border-radius: 20px; ">
            
            <div class="offset-lg-2 col-lg-8 justify-content-center">
               <div class="logo animate__animated animate__bounceInDown">
               <img src="../../assets/hh.png" class="card-img-top" width="10px" height="" >
               </div>
               
               <form @submit.prevent="registro">
                   <div class="form-group">
                     <input type="name" name="name" id="name" v-model="user" formControlName="email"  class="form-control"  placeholder="Ingrese su Usuario" required>
                  </div>
                  <br>
                  <div class="form-group">
                     <input type="email" name="email" v-model="email" id="email" formControlName="email"  class="form-control"  placeholder="Ingrese su Correo" required>
                  </div>
                  <br>
                  <div class="form-group">
                     <input type="password" v-model="pass" name="password" id="password" formControlName="password"  class="form-control"  placeholder="Ingrese su contraseña" required>
                  </div>
                  <br>
                  <br>
                  <div class="color">
                     <div class="form-group d-grid gap-2 " >
                        <button type="submit" class=" btn btn-block mybtn tx-tfm button" style="color: #ffff">Registrarme</button>
                     </div>
                  </div>
               </form>
                  <br>
                  <div class="deco">
                  <div class="form-group text-center">
                     <a class="text-black link"  href="/login" style="color: #320000"> <b>Iniciar Sesión</b></a>
                  </div>
                  </div>
                  <br>
            </div>
         </div>
      </div>
   </div>
   <br>
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
    background-attachment: fixed;
    height: 100vh;
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

.button:hover {background-color: #250000}

.button:active {
  background-color: #250000;
  box-shadow: 0 5px #666;
  transform: translateY(5px);
}
</style>
<script>
import Swal from 'sweetalert2'
import axios from "axios";
export default {
    
    data(){
        return {
         user:"",
         email:"",
         pass:""
        }
    },
    methods:{
       
        async registro(){
           console.log(this.user)
            await axios.post('http://127.0.0.1:8000/api/registro',{
               nombre:this.user,
               email:this.email,
               password:this.pass,
               rol:"user"
            }).then(response=>{
               console.log(response.data.status)
               if(response.data.status){
                  Swal.fire(
                     'Registro completado',
                     '',
                     'success'
                  )
                  this.$router.push('/login')
               }
               else{
                  Swal.fire(
                     'Registro fallido',
                     '',
                     'error'
                  )
               }
            }).catch(error=>{
               console.log(error)
               Swal.fire(
                     'Correo ya registrado',
                     '',
                     'error'
                  )
            })
        },
    }
}
</script>