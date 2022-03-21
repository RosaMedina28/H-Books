<template>
        <br>
    <div class="container">
        <div>
            <h2 class="brown">Editar libro</h2>
        </div>
        <br>
        <div class="row text-start" >
            <div class="col bg-form-1">
                <form class="white" style="margin-top: 30px;margin-bottom: 30px">
                    <div class="mb-3">
                        <label  class="form-label">Titulo</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Categoria</label>
                        <select class="form-select">
                            <option selected></option>
                            <option value="Aventura">Aventura</option>
                            <option value="Accion">Accion</option>
                            <option value="Romance">Romance</option>
                        </select>
                    </div>
                    
                    <div class="mb-3">
                        <label  class="form-label">Autor</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Editoria</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">ISBN</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Numero de Paginas</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Edicion</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Año De Lanzamiento</label>
                        <input type="text" class="form-control">
                    </div>

                </form>
            </div>
            <div class="col bg-form-2">
                <form style="margin-top: 30px;">
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label white">Sinopsis</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                <div class="row">
                    <div class="col-lg-4 d-grid gap-2">
                        <button type="button" class="btn bg-form-1 white btn-block">Selecionar PDF</button>
                    </div>   
                    <div class="offset-lg-4 col-lg-4 d-grid gap-2">
                        <button type="button" class="btn bg-form-1 white btn-block">Selecionar Imagen</button>
                    </div>
                </div>
                <div class="d-grid gap-2 ">
                    <button type="submit" class="btn white bg-form-1 d-grid gap-2" style="margin-top: 415px;">Editar Libro</button>
                </div>
                </form>
                
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditarLibro',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-form-2{
    background-color: #320000;
}
.brown{
    color: #320000;
}
.white{
    color: #ffff;
}
.bg-form-1{
    background-color: #CCAB80;
}
</style>
