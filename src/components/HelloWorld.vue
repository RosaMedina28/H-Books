<template>
  <div class="">
  <div class="altura">
    <div class="nav">
    <nav class="navbar navbar-expand-sm ">
       <div class="container-fluid">
    <span class="navbar-text">H-Books</span>
  </div>
</nav>
    </div>
  </div>
    <div class="navba">
<nav class="navbar navbar-expand-lg navbar-">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/h.png"  style="width:50px;" > 
    </a>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <div class="anchura">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="" aria-label="">
        <button class="btn btn-outline-light" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
      </form>
      </div>
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 200px;">
        
       <div class="cate">
        <div class="btn-group text-end">
          <button class="btn btn-light  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Aventura</a></li>
            <li><a class="dropdown-item" href="#">Romance</a></li>
            <li><a class="dropdown-item" href="#">Ficción</a></li>
            <li><a class="dropdown-item" href="#">Tecnología</a></li>
            <li><a class="dropdown-item" href="#">Drama</a></li>
            <li><a class="dropdown-item" href="#">Ciencia</a></li>
          </ul>
        </div>
       </div>
<!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown"
           role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorías
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Acción</a></li>
            <li><a class="dropdown-item" href="#">Aventura</a></li>
            <li><a class="dropdown-item" href="#">Romance</a></li>
            <li><a class="dropdown-item" href="#">Ficción</a></li>
            <li><a class="dropdown-item" href="#">Tecnología</a></li>
            <li><a class="dropdown-item" href="#">Drama</a></li>
            <li><a class="dropdown-item" href="#">Ciencia</a></li>
          </ul>
        </li>-->
      </ul>
      <i class="bi bi-person-circle"></i>
    </div>
  </div> 
  
</nav>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navba {
 background-color: #320000;
 
}

.nav {
  background-color:#ccab80;
}

.anchura {
width: 720px;
}
.altura {
height: 40px;
}
.cate {
  position: absolute;
  top: 18px;
  right: 300px;
  
}
.cate {
  position: absolute;
  top: 18px;
  right: 300px;
  
}
</style>
