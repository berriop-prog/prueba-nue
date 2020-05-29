<template>
  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters>
      <v-col sm="5" md="6">
        <v-card class="pa-2" outlined tile>
          .col-sm-5 .col-md-6
        </v-card>
      </v-col>
      <v-col sm="5" offset-sm="2" md="6" offset-md="0">
        <v-card class="pa-2" outlined tile>
         Img
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SectionA',
  parts: {
    subtitle: 'NEUMOMED',
    title: 'Neumomed IPS',
    text:
      'ofrece una atención integral a pacientes con enfermedades respiratorias y trastornos del sueño.',
  },
};
</script>
