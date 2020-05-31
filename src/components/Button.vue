<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on }">
        <v-btn color="#3A899A" dark v-on="on" style="margin: 20px 0"
          >Formulario</v-btn
        >
      </template>
      <v-card>
        <v-toolbar dark color="#3A899A">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Salir</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Guardar</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list v-for="(seccion, i) in section" :key="i" three-line subheader>
          <v-subheader
            >Sección {{ seccion.valor }}: {{ seccion.nombre }}</v-subheader
          >
          <v-container>
            <div v-for="(variable, i) in variable" :key="i">
              <v-row v-if="variable.seccion == seccion.valor">
                <v-col cols="4">
                  <v-subheader>{{ variable.nombre }}</v-subheader>
                </v-col>
                <v-col cols="8" v-if="!variable.opciones_lista">
                  <v-text-field
                    value="00"
                    v-bind:label="variable.tipo"
                  ></v-text-field>
                </v-col>
                <v-col cols="8" v-if="variable.opciones_lista">
                  <v-row
                    v-for="(opcion, i) in variable.opciones_lista"
                    :key="i"
                  >
                    <v-text-field
                      value="00"
                      v-bind:label="opcion.valor"
                    ></v-text-field>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dialog: false,
      widgets: false,
      variable: null,
      section: null,
    };
  },
  created() {
    axios
      .get(
        'https://formularios-prueba-tecnica-6ihrk4y23q-ue.a.run.app/formularios/api/v3/prueba_tecnica'
      )
      .then(({ data }) => {
        if (data && data.data && data.data.data) {
          const { variable, seccion } = data.data.data;
          let variableArray = [];
          for (let key in variable) {
            variableArray.push(variable[key]);
          }
          let sectionArray = [];
          for (let key in seccion) {
            sectionArray.push(seccion[key]);
          }
          this.variable = variableArray.sort((a, b) => a.seccion - b.seccion);
          this.section = sectionArray.sort((a, b) => a.valor - b.valor);
          return;
        }
        this.variable = null;
        this.section = null;
        return;
      })
      .catch((error) => console.log(error));
  },
};
</script>
