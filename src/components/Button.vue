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
          <v-subheader>Sección {{seccion.valor}}: {{ seccion.nombre }}</v-subheader>
          <v-container>
            <div v-for="(variable, i) in variable" :key="i">
              <v-row v-if="variable.seccion == seccion.valor">
                <v-col cols="4">
                  <v-subheader>{{variable.nombre}}</v-subheader>
                </v-col>
                <v-col cols="8" v-if="!variable.opciones_lista">
                  <v-text-field
                    value="00"
                    v-bind:label="variable.tipo"
                  ></v-text-field>
                </v-col>
                <v-col cols="8" v-if="variable.opciones_lista">
                  <v-row v-for="(opcion, i) in variable.opciones_lista" :key="i">
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

        <v-divider></v-divider>
        <!-- <v-list three-line subheader>
          <v-subheader>Sección 1: Condición física</v-subheader>
          <v-container>
            <v-row>
              <v-col cols="4">
                <v-subheader>Peso</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Peso"
                  value="00"
                  suffix="kilo"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader>Talla</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Talla"
                  value="00"
                  suffix="cm"
                ></v-text-field>
              </v-col>
            </v-row>

             <v-row>
              <v-col cols="4">
                <v-subheader>Índice de Masa Corporal (IMC)</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="IMC"
                  value="00"
                  suffix="mmHg"
                ></v-text-field>
              </v-col>
            </v-row>

          </v-container>
          <v-divider></v-divider>
          <v-subheader>Sección 2: Estado general</v-subheader>

          <v-container >
            <v-row align="center">
              <v-col class="d-flex" cols="12" sm="6">
                <v-subheader>Clasificación a partir del IMC</v-subheader>
                <v-select :items="items" label="Clasificación"></v-select>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader>Presión arterial sistólica</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Presión arterial sistólica"
                  value="00"
                  suffix="mmHg"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader>Presión arterial diastólica</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Presión arterial diastólica"
                  value="00"
                  suffix="mmHg"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader>Frecuencia cardiaca</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Frecuencia cardiaca"
                  value="00"
                  suffix="ppm"
                ></v-text-field>
              </v-col>
            </v-row>

              <v-row>
              <v-col cols="4">
                <v-subheader>Frecuencia respiratoria</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Frecuencia respiratoria"
                  value="00"
                  suffix="ppm"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <v-divider></v-divider>
          <v-subheader>Sección 3: Índices</v-subheader>
          <v-container>
            <v-row>
              <v-col cols="4">
                <v-subheader>Indice de Mallampati modificado</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Indice de Mallampati "
                  value="00"
                  suffix="Escala"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader>Temperatura</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Temperatura"
                  value="00"
                  suffix="Grados"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-subheader>Circunferencia del cuello</v-subheader>
              </v-col>
              <v-col cols="8">
                <v-text-field
                  label="Circunferencia del cuello"
                  value="00"
                  suffix="Centimetros"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-list> -->
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
      section: null
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
