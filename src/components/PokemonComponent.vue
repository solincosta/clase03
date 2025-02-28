<template>
  <div class="card">
    <img :src="imagen" alt="" />
    <h4>{{ nombre }}</h4>
    <span :style="{
        'background-color': color
    }" 
    class="span">{{ tipo }}</span>
    <button  @click="verPokemon(nombre)" class="boton-pokemon">VER</button>
  </div>
</template>

<script>
export default {
  name: "PokemonComponent",

  methods:{
    verPokemon: function (nombre){
      alert("El pokemon seleccionado es: " + nombre);
    }
  },

  props:{
    id: Number,
    imagen: String,
    nombre: String,
    tipo: String,
    color: String
  }
};
</script>

<style scope>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.test{
    border: solid red 2px;
}

.card {
    display: flex;
    flex-direction: column;
    height: 370px;
    width: 100%;
    justify-content: space-between;
}

img{
    width: 100%;
    height: auto;
}

.span{
    
    color:black;
    width: 100%;
}

.boton-pokemon{
  background-color: gray;
  color: aliceblue;
  border-radius: 10%;
  border: none;
}

.boton-pokemon:hover{
  scale: 1.02;
}
</style>
