<template>

<div class="background ">
   <br>
   <div class="container">
      <div class="row justify-content-center " >
         <div class="col-lg-5 justify-content-center" style="background-color:white; border-radius: 20px; ">
            
            <div class="offset-lg-2 col-lg-8 justify-content-center">
               <div class="logo">
               <img src="../../assets/hh.png" class="card-img-top" width="10px" height="">
               </div>
                <div class="form-group">
                     <input type="email" name="email" id="email" formControlName="email"  class="form-control"  placeholder="Ingrese su Usuario" required>
                  </div>
                  <br>
                  <div class="form-group">
                     <input type="email" name="email" id="email" formControlName="email"  class="form-control"  placeholder="Ingrese su Correo" required>
                  </div>
                  <br>
                  <div class="form-group">
                     <input type="password" name="password" id="password" formControlName="password"  class="form-control"  placeholder="Ingrese su contraseña" required>
                  </div>
                  <br>
                  <div class="form-group">
                     <input type="password" name="password" id="password" formControlName="password"  class="form-control"  placeholder="Confirme Contraseña" required>
                  </div>
                  <br>
                  <div class="color">
         
                  <div class="form-group">
                     <button type="submit" class=" btn btn-block mybtn bg-yellow tx-tfm" style="color: #ffff">Iniciar sesion</button>
                  </div>
                  </div>
                  <br>
                  <div class="deco">
                  <div class="form-group text-center">
                     <a class="text-black link" routerLink="/registro" style="color: #320000"><b>Registrarme</b></a>
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
</style>