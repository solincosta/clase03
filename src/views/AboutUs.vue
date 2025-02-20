<template>
  <div>
    <MainMenu></MainMenu>
    Este es My Código
    <!-- <button @click="addStudent">Agregar estudiante</button>
    <button @click="addStudent" class="btn btn-primary">Guardar</button> -->

    <div class="row g-3 " >
      <div class="col-md-4">
        <label for="lblId" class="form-label">ID</label>
        <input
          type="text"
          class="form-control"
          id="lblId"
          :value="estudianteNuevo.id"
        />
      </div>
      <div class="col-md-4">
        <label for="lblNombre" class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="lblNombre"
          :value="estudianteNuevo.nombre"
        />
      </div>
      <div class="col-md-4">
        <label for="lblEdad" class="form-label">EDAD</label>
        <input
          type="text"
          class="form-control"
          id="lblEdad"
           :value="estudianteNuevo.edad"
        />
       
      </div>


      <div class="col-12">
        <button @click="addStudent" class="btn btn-primary">Guardar</button>
        <!-- <button @click="addStudent">Agregar estudiante</button> -->

      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NOMBRE</th>
          <th scope="col">EDAD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.edad }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//Aquí voy a importar mis componentes
import MainMenu from "@/components/MainMenu.vue";
export default {
  name: "PageAbout",
  //Aquí van los datos iniciales
  data() {
    return {
      estudiantes: [
        {
          id: 29887755,
          nombre: "Jeimy Donado",
          edad: 18,
        },
        {
          id: 29887756,
          nombre: "Paulo Pallares",
          edad: 19,
        },
      ],

      estudianteNuevo: {
        id: 0,
        nombre: "",
        edad: 0
      }
    };
  },
  //Aquí voy a crear mis funciones
  methods: {
    getAllStudents: function () {
      console.log(this.estudiantes);
    },

    addStudent: function () {

      let encontrado = false;

      for (let i = 0; i < this.estudiantes.length; i++) {
        if (this.estudianteNuevo.id == this.estudiantes[i].id) {
          encontrado = true;
        }
      }

      if (encontrado == false) {
        this.estudiantes.push(this.estudianteNuevo);
        alert("Se ha agregado un nuevo estudiantes");
      } else {
        alert("No se pudo guardar el estudiante, porque ya existe");
      }
    },
  },
  //Aquí voy a iniciar Mis componentes
  components: {
    MainMenu,
  },

  //Aquí en el created se inicia la Vista
  created: function () {
    this.getAllStudents();
  },
};
</script>

<style></style>
