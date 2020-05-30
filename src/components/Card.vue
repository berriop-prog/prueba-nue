<template>
  <v-container
    style="width: 100%; heigth: 332px; padding: 80px 20px 0 0; background-color: #ffffff;"
  >
    <v-row no-gutters>
      <v-col>
        <v-card class="pa-5 mt-5" outlined tile style="border: none; ">
          <h3 style="font-size: 25px; color: #3A899A; margin: 20px 0 0 0;;  padding: 15px 0; border-top: 2px solid #2B2B2B">
            Programas
          </h3>
          <ul>
            <li style="font-size: 17px" v-for="programa in programas">
              {{ programa }}
            </li>
          </ul>
        </v-card>
      </v-col>
      <v-col order="12">
        <v-card class="pa-5 mt-5" outlined tile style="border: none">
          <h3 style="font-size: 25px; color: #3A899A; margin: 20px 0 0 0;  padding: 15px 0; border-top: 2px solid #2B2B2B">
            Consultas
          </h3>
          <li style="font-size: 17px" v-for="consulta in consultas">
            {{ consulta }}
          </li>
        </v-card>
      </v-col>
      <v-col order="1">
        <v-card class="pa-5 mt-5" outlined tile style="border: none">
          <h3 style="font-size: 25px; color: #3A899A; margin: 20px 0 0 0;  padding: 15px 0; border-top: 2px solid #2B2B2B">
            Terapias
          </h3>
          <li style="font-size: 17px" v-for="terapia in terapias">
            {{ terapia }}
          </li>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      programas: [
        'Programa de EPOC y ASMA',
        'Programa de SAHOS',
        'Programa Dejar de Fumar',
      ],
      terapias: [
        'Rehabilitación Pulmonar',
        'Terapia Miofuncional Orofacial',
        'Terapia Cognitivo Conductual',
      ],
      consultas: [
        'Consulta de Neumología',
        'Consulta de Nutrición',
        'Consulta de Psicología',
      ],
    };
  },
};
</script>
