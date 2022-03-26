<template>
  <div>
    <div><router-view></router-view></div>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@font-face{
  font-family: "Rochester";
  unicode-range:U+000-5FF;
  src: local('Rochester'), url('@/assets/fonts/Rochester/Rochester-Regular.ttf') format('truetype');
}
@font-face{
  font-family:"Overpass";
  unicode-range: U+000-5FF;
  src: local('Overpass'), url('@/assets/fonts/Overpass/Overpass-VariableFont_wght.ttf') format('truetype');
}

.title-main {
    font-family: "Rochester", Helvetica, Arial, Bold;
    font-size: 48px;
}
.letter-page{
  font-family: "Overpass";
  font-size: 14px;
}
.button-fav{
  margin:0px;
  border: 3px solid #320000;
  color: #320000;
}
</style>