<template>
        <br>
    <div class="container">
        <div>
            <h2 class="brown">Añadir Nueva Categoria</h2>
        </div>
        <br>
        <div class="row text-start justify-content-center" >
            <div class="col-lg-6 bg-form-2">
                <form class="white" style="margin-top: 30px;margin-bottom: 30px">
                    <div class="mb-3">
                        <label  class="form-label">Nombre</label>
                        <input type="text" class="form-control">
                    </div>
                    <br>
                    <div class="d-grid gap-2 ">
                        <button type="submit" class="btn white bg-form-1 d-grid gap-2" style="">Guardar Categoria</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InsertarCategoria',
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
